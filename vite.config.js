import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Hämta repo-namnet från miljövariabeln (GitHub Pages använder detta)
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

export default defineConfig({
    plugins: [react()],
    base: `/${repoName}/`,  // 🔥 Dynamisk bas-URL för GitHub Pages
    build: {
        outDir: 'dist',  // 📂 Se till att output-mappen är korrekt
    },
});
