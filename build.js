const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

const srcDir = path.join(__dirname, 'l5/compilezip');
const destDir = path.join(__dirname, 'prel2');

async function deleteAllFilesInDirectory(directoryPath) {
  try {
    const files = await fs.promises.readdir(directoryPath);

    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const stat = await fs.promises.stat(filePath);

      if (stat.isFile()) {
        await fs.promises.unlink(filePath);
        console.log(`Deleted file: ${filePath}`);
      } else if (stat.isDirectory()) {
        // Recursively delete files in subdirectories (optional)
        await deleteAllFilesInDirectory(filePath);
      }
    }

    console.log(`All files in directory ${directoryPath} have been deleted.`);
  } catch (err) {
    console.error(`Error deleting files in directory ${directoryPath}:`, err);
  }
}

async function exec() {

  await deleteAllFilesInDirectory(srcDir)

  // Compile TypeScript files in the src directory
  esbuild.build({
    entryPoints: ['prel2/**/*.ts'], // substitua pelo caminho para o seu arquivo de entrada
    bundle: false,
    outdir: 'l5/compilezip',
    platform: 'node',//'node',
    target: 'es2015',
    sourcemap: false,
    format: 'esm'
  }).then(async () =>{ await deleteAllFilesInDirectory(destDir)}).catch(() => process.exit(1));

}

exec()

