const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Função para percorrer recursivamente diretórios e coletar arquivos
async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = await fs.promises.readdir(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = await fs.promises.stat(filePath);
    
    if (stat.isDirectory() && !['node_modules','prel2','preBuild','.git','.github','build','dist'].includes(file)) {
    
      await getAllFiles(filePath, arrayOfFiles);
    } else if (stat.isFile() && (filePath.indexOf("\\l")>= 0  || filePath.indexOf("/l")>= 0 )) {
        console.log(`file: ${filePath} `);
      arrayOfFiles.push(filePath);
    }
  }

  return arrayOfFiles;
}

// Função para obter a versão do arquivo usando 'git log -1'
function getFileVersion(filePath) {
  return new Promise((resolve, reject) => {
    exec(`git log -1 --pretty=format:%H -- ${filePath}`, (err, stdout, stderr) => {
      if (err) {
        reject(`Error getting version for file ${filePath}: ${stderr}`);
        return;
      }
      resolve(stdout.trim());
    });
  });
}

function getFileOID(commit, filePath) {
  return new Promise((resolve, reject) => {
    const command = `git ls-tree --full-name -r ${commit} ${filePath}`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error executing command: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`Command error: ${stderr}`);
        return;
      }
      const lines = stdout.trim().split('\n');
      if (lines.length === 0) {
        reject(`File not found in commit`);
        return;
      }
      const parts = lines[0].split(/\s+/);
      if (parts.length < 3) {
        reject(`Unexpected output format`);
        return;
      }
      resolve(parts[2]); // OID está na terceira coluna
    });
  });
}

// Função principal
(async () => {
  const projectRoot = path.join(__dirname, '..'); // Ajuste conforme necessário

  try {
    const allFiles = await getAllFiles(projectRoot);
    let versionCompile = ""
    const fileInfos = await Promise.all(allFiles.map(async file => {
      const relativePath = path.relative(projectRoot, file);
      const stat = await fs.promises.stat(file);
      let versionRef = "";

      if(versionCompile === "" ) versionCompile = await getFileVersion(relativePath);
      if(versionCompile !== "" ) versionRef = await getFileOID(versionCompile, relativePath)
      
      return {
        ShortPath: relativePath,
        versionRef,
        Length: stat.size
      };
    }));

    const lastModify = new Date();

    const js = {
      lastModify:lastModify.toISOString(),
      files: fileInfos
    }

    // Escrever as informações no arquivo fileinfos.json
    const outputPath = path.join(projectRoot, 'preBuild/fileinfos.json');
    await fs.promises.writeFile(outputPath, JSON.stringify(js, null, 2));

    console.log(`File information has been written to ${outputPath}`);
  } catch (error) {
    console.error(error);
  }
})();