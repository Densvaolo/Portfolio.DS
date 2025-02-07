import { defineConfig } from 'vite';

export default defineConfig({
    base: '/Portfolio.DS/', // Basväg för GitHub Pages
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: './index.html', // Ange rätt ingångsfil
        },
    },
});
