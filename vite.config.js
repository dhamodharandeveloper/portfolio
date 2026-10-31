import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repo>/, so the production build
// needs that base. Local dev stays at the root.
const base = process.env.GITHUB_PAGES ? '/portfolio/' : '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    target: 'es2020',
  },
})
