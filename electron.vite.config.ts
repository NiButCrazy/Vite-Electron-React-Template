import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    publicDir: './static',
    build: {
      outDir: '.out/main',
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/main/main.ts')
        }
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    publicDir: './static',
    build: {
      outDir: '.out/preload',
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/preload/preload.ts')
        }
      }
    }
  },
  renderer: {
    build: {
      outDir: '.out/renderer'
    },
    resolve: {
      alias: {
        '@renderer': resolve(__dirname, './src/renderer/src'),
        '@components': resolve(__dirname, './src/renderer/src/components'),
        '@utils': resolve(__dirname, './src/renderer/src/utils')
      }
    },
    css: {
      modules: {
        localsConvention: 'camelCase'
      }
    },
    plugins: [
      react(),
      tailwindcss()
    ]
  }
})
