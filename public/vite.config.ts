import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'main'), outDir = resolve(__dirname, 'dist');
export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(root, 'index.html'),
                back: resolve(root, '404.html')
            }
        }
    }
});