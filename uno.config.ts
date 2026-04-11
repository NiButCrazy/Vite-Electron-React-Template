import { defineConfig, presetMini, transformerDirectives } from 'unocss'


export default defineConfig({
  // ...UnoCSS 设置
  rules: [
    [ 'color1', { color: 'var(--accent)' } ],
    [ 'bg-color1', { background: 'var(--accent-bg)' } ],
    [ 'border-color1', { 'border-color': 'var(--accent-border)' } ],
    [ 'outline1', { outline: '2px solid var(--accent)' } ],
  ],
  presets: [
    presetMini({
      preflight: 'on-demand',
    }),
  ],
  transformers: [
    transformerDirectives()
  ]
})
