import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs/promises';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            {
                find: 'assets',
                replacement: path.resolve(__dirname, 'src/assets'),
            },
            {
                find: 'components',
                replacement: path.resolve(__dirname, 'src/components'),
            },
            {
                find: 'routes',
                replacement: path.resolve(__dirname, 'src/routes'),
            },
            {
                find: 'services',
                replacement: path.resolve(__dirname, 'src/services'),
            },
            {find: 'utils', replacement: path.resolve(__dirname, 'src/utils')},
            {find: 'views', replacement: path.resolve(__dirname, 'src/views')},
        ],
    },
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
});
