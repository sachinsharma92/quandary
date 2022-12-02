import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs/promises';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: 'load-js-files-as-jsx',
                    setup(build) {
                        build.onLoad(
                            {filter: /src\/.*\.js$/},
                            async (args) => ({
                                loader: 'jsx',
                                contents: await fs.readFile(args.path, 'utf8'),
                            }),
                        );
                    },
                },
            ],
        },
    },
    plugins: [react()],
    resolve: process.env.USE_SOURCE
        ? {
              alias: {
                  '@remix-run/router': path.resolve(
                      __dirname,
                      '../../packages/router/index.ts',
                  ),
                  'react-router': path.resolve(
                      __dirname,
                      '../../packages/react-router/index.ts',
                  ),
                  'react-router-dom': path.resolve(
                      __dirname,
                      '../../packages/react-router-dom/index.tsx',
                  ),
              },
          }
        : {},
});
