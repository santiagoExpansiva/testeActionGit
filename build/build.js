const esbuild = require('esbuild');
const fs = require('fs').promises;
const ts = require('typescript');

// Função de configuração esbuild
async function build() {
  try {
    await esbuild.build({
      entryPoints: ['l2/**/*.ts'],
      outdir: 'dist/l2',
      platform: 'browser',
      target: 'es6',
      format: 'esm',
      sourcemap: false,
      bundle: false,
      loader: { '.ts': 'ts' },
      logLevel: 'info',
      plugins: [
        {
          name: 'ts-decorators',
          setup(build) {
            build.onLoad({ filter: /\.ts$/ }, async (args) => {
              const source = await fs.readFile(args.path, 'utf8');
              const result = ts.transpileModule(source, {
                compilerOptions: {
                  target: ts.ScriptTarget.ES6,
                  module: ts.ModuleKind.ESNext,
                  experimentalDecorators: true,
                  emitDecoratorMetadata: true
                }
              });

              return {
                contents: result.outputText,
                loader: 'ts'
              };
            });
          }
        }
      ]
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

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
        await fs.rmdir(filePath, (err) => {
          if (err) {
            console.error(`Error removing directory: ${err}`);
          } else {
            console.log(`Directory removed: ${filePath}`);
          }
        });
      }
    }

    console.log(`All files in directory ${directoryPath} have been deleted.`);
  } catch (err) {
    console.error(`Error deleting files in directory ${directoryPath}:`, err);
  }
}

async function exec() {
  const projectRoot = path.resolve(__dirname, '..');
  const sourceDir = path.join(projectRoot, 'dist');
  await deleteAllFilesInDirectory(sourceDir);
  build();
}

exec();