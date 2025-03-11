import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000',   // this will append before /api and proxy added that the request is coming from this __ same server
    }
  },
  plugins: [react()],
})
