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

build();