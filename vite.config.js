import { defineConfig } from 'vite';

export default defineConfig({
    base: "./",  // För att undvika fel i sökvägar
    build: {
        outDir: "dist",  // Se till att det byggs till rätt mapp
    },
});
