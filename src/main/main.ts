import { app, shell, BrowserWindow, ipcMain, session } from 'electron'
import { installExtension, REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { join } from 'path'
import icon from '../../static/icon.png?asset'


function createWindow(): void {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    backgroundMaterial: 'auto',
    ...(process.platform === 'linux' ? {} : { icon }),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    if (is.dev) mainWindow.webContents.openDevTools()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // 基于 electron-vite cli 的渲染器 HMR
  // 加载远程 URL 进行开发，或加载本地 html 文件进行生产。
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, `../renderer/index.html`))
  }
}

/**
 * 加载谷歌扩展
 */
function load_extensions() {
  installExtension(REACT_DEVELOPER_TOOLS).then(() => {
    session.defaultSession.getAllExtensions().map((e) => {
      session.defaultSession.loadExtension(e.path)
      console.log(`已加载扩展:  ${e.name}`)
    })
  }).catch((err) => {
      console.log('无法加载扩展: ', err)
  })
}

// 当 Electron 完成初始化并准备好创建浏览器窗口时，将调用此方法
// 某些 API 只能在此事件发生后使用
app.whenReady().then(() => {
  // 为 Windows 设置应用用户模型 ID
  electronApp.setAppUserModelId('com.electron')
  // 只在开发环境加载扩展
  if (is.dev) load_extensions()

  // 开发中 F12 的默认打开或关闭 DevTools
  // 并在生产环境中忽略 CommandOrControl + R
  // 参考 https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC 测试
  ipcMain.on('ping', (_, count) => console.log('count: ' + count++))

  createWindow()

  app.on('activate', function () {
    // 在 macOS 上，当单击 Dock 图标并且没有打开其他窗口时，通常会在应用程序中重新创建一个窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 当所有窗口都关闭时退出，macOS 除外：
// 在那里，应用程序及其菜单栏通常会保持活动状态，直到用户使用 Cmd + Q 明确退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 在此文件中，您可以包含应用程序的特定 main process 代码的其余部分
// 您也可以将它们放在单独的文件中，并在此处要求它们
