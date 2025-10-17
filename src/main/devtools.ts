import { BrowserWindow } from 'electron'
import path from 'node:path'


/**
 * 自定义 devtools 字体，不然丑爆了！
 * @param mainWindow
 * @param font_size 字体大小
 */
export function devtools_custom_font(
  mainWindow: BrowserWindow,
  font_size: number = 13
) {
  mainWindow.webContents.on('devtools-opened', () => {
    const css = `
        :root {
            --sys-color-base: var(--ref-palette-neutral100);
            --source-code-font-family: JetBrains Maple Mono, consolas !important;
            --source-code-font-size: ${ font_size }px;
            --monospace-font-family: JetBrains Maple Mono, consolas !important;
            --monospace-font-size: ${ font_size }px;
            --default-font-family: JetBrains Maple Mono, system-ui, sans-serif;
            --default-font-size: ${ font_size }px;
            --ref-palette-neutral99: #ffffffff;
        }
        .theme-with-dark-background {
            --sys-color-base: var(--ref-palette-secondary25);
        }
        body {
            --default-font-family: JetBrains Maple Mono, system-ui,sans-serif;
        }
    `
    mainWindow.webContents.devToolsWebContents!.executeJavaScript(`
        const overriddenStyle = document.createElement('style');
        overriddenStyle.innerHTML = '${ css.replaceAll('\n', ' ') }';
        document.body.append(overriddenStyle);
        document.querySelectorAll('.platform-windows').forEach(el => el.classList.remove('platform-windows'));
        addStyleToAutoComplete();
        const observer = new MutationObserver((mutationList, observer) => {
            for (const mutation of mutationList) {
                if (mutation.type === 'childList') {
                    for (let i = 0; i < mutation.addedNodes.length; i++) {
                        const item = mutation.addedNodes[i];
                        if (item.classList.contains('editor-tooltip-host')) {
                            addStyleToAutoComplete();
                        }
                    }
                }
            }
        });
        observer.observe(document.body, {childList: true});
        function addStyleToAutoComplete() {
            document.querySelectorAll('.editor-tooltip-host').forEach(element => {
                if (element.shadowRoot.querySelectorAll('[data-key="overridden-dev-tools-font"]').length === 0) {
                    const overriddenStyle = document.createElement('style');
                    overriddenStyle.setAttribute('data-key', 'overridden-dev-tools-font');
                    overriddenStyle.innerHTML = '.cm-tooltip-autocomplete ul[role=listbox] {font-family:JetBrains Maple Mono, consolas !important;}';
                    element.shadowRoot.append(overriddenStyle);
                }
            });
        }
    `)
  })
}

const reactDevtools = path.join(__dirname, '../../static/react-devtools')

/**
 * 加载谷歌扩展
 */
export function load_extensions(mainWindow: BrowserWindow) {
  const ses = mainWindow.webContents.session
  ses.extensions.loadExtension(reactDevtools)
  // ! 点睛之笔!!!
  //  React 开发者工具的内容脚本尝试与后台服务工作者通信，而后者在启动时（首次安装后）并未运行,所以手动运行
  ses.extensions.on('extension-ready', (_, extension) => {
    const manifest = extension.manifest
    if (manifest.manifest_version === 3 && manifest?.background?.service_worker) {
      ses.serviceWorkers.startWorkerForScope(extension.url)
    }
  })
}

