import { defineConfig, } from 'electron-vite'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  main: {
    publicDir: './static',
    build: {
      outDir: '.out/main',
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/main/main.ts')
        }
      }
    },
    resolve: {
      alias: {
        '@static': resolve(__dirname, './static')
      }
    }
  },
  preload: {
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
        '@utils': resolve(__dirname, './src/renderer/src/utils'),
        '@shared': resolve(__dirname, './src/renderer/src/shared'),
        '@hooks': resolve(__dirname, './src/renderer/src/hooks')
      }
    },
    css: {
      devSourcemap: true,
      modules: {
        localsConvention: 'dashesOnly',
        generateScopedName: '[local]-[hash:5]'
      }
    },
    plugins: [
      UnoCSS(),
      react({
          babel: {
            plugins: [ 'babel-plugin-react-compiler' ],
          }
        }
      ),
    ]
  }
})
