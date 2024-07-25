// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        prensa: resolve(__dirname, 'prensa.html'),
        terminos: resolve(__dirname, 'terminos.html'),
      },
    },
  },
})