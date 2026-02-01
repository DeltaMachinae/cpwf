import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Importante per i percorsi relativi
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: './index.html',
            },
            output: {
                // Rimuoviamo l'hash dai nomi file per non dover aggiornare functions.php ogni volta
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            }
        }
    },
    server: {
        port: 3000,
        open: true
    }
});