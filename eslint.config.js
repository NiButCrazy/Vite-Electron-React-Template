import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'


export default defineConfig([
  globalIgnores([ 'dist' ]),
  {
    files: [ '**/*.{ts,tsx}' ],
    extends: [
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // 方法的参数始终是双变的，而函数属性的参数是逆变的，这样设置防止函数窄接口参数类型错误
      '@typescript-eslint/method-signature-style': [ 'error', 'property' ]
    }
  },
])
