import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // För att undvika sökvägsproblem
    build: {
        outDir: 'dist', // Se till att utdata hamnar i dist/
    },
});
