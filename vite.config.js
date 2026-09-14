import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/mockapi': {
        target: 'https://6a3b636ce4a07f202e14db14.mockapi.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mockapi/, ''),
      },
    },
  },
})
