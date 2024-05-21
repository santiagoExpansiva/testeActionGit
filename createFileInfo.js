const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Função para percorrer recursivamente diretórios e coletar arquivos
async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = await fs.promises.readdir(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = await fs.promises.stat(filePath);
    
    if (stat.isDirectory() && !['node_modules','prel2','.git','.github'].includes(file)) {
    
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

// Função principal
(async () => {
  const projectRoot = path.join(__dirname); // Ajuste conforme necessário

  try {
    const allFiles = await getAllFiles(projectRoot);
    const fileInfos = await Promise.all(allFiles.map(async file => {
      const relativePath = path.relative(projectRoot, file);
      const versionRef = await getFileVersion(relativePath);
      const stat = await fs.promises.stat(file);

      return {
        ShortPath: relativePath,
        versionRef,
        Length: stat.size
      };
    }));

    // Escrever as informações no arquivo fileinfos.json
    const outputPath = path.join(projectRoot, 'fileinfos.json');
    await fs.promises.writeFile(outputPath, JSON.stringify(fileInfos, null, 2));

    console.log(`File information has been written to ${outputPath}`);
  } catch (error) {
    console.error(error);
  }
})();