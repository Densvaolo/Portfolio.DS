import { defineConfig } from 'vite';

export default defineConfig({
    base: './',  // Fixar sökvägar för GitHub Pages
    build: {
        outDir: 'dist',  // Se till att output går till rätt mapp
    },
});
