import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  // root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    },
  },
  base: '/la-zona-tech/',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },
  server: {
    fs: {
      strict: false
    }
  }
})