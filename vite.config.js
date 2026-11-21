import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// En local se sirve desde "/"; en producción (GitHub Pages) desde "/project-name-frontend/".
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/project-name-frontend/' : '/',
  plugins: [react()],
}))
