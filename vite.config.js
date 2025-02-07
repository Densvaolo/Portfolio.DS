import { defineConfig } from 'vite';

export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/Portfolio.DS/' : './', // Basväg för GitHub Pages endast vid produktion
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: './index.html',
        },
    },
});
