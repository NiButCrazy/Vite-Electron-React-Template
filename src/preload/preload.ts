import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// 自定义渲染 APIS
const api = {}

// 仅当启用了上下文隔离时，才会使用 `contextBridge` API 将 Electron APIs 暴露给渲染器
// 其他情况只需把 APIs 添加到 DOM 全局变量中即可
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
