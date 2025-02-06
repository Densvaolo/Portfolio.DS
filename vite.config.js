import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Portfolio.DS/',  // Det här är basvägen för GitHub Pages (ersätt med din repository-namn om det är annorlunda)
    build: {
        outDir: 'dist',
    },
})
