import { defineConfig } from 'vite'

export default defineConfig({
    root: '.', // Förväntar att alla filer är i projektets rot
    build: {
        outDir: 'dist', // Byggresultatet sparas i dist/
    },
})
