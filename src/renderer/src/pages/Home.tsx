import Button from "../components";
import electronLogo from "@renderer/assets/images/electron.svg";


export default function Home() {

  return (
      <>
        <img alt="logo" className="logo" src={electronLogo} />
        <div className="creator">由 electron-vite 强力驱动</div>
        <div className="text">
          通过 <span className="react">React</span>
          &nbsp;和 <span className="ts">TypeScript</span>
          &nbsp;构建一个 Electron 应用
        </div>
        <p className="tip">
          尝试按下 <code>F12</code> 来使用开发者工具
        </p>
        <div className="actions">
          <div className="action">
            <a href="https://cn.electron-vite.org/" target="_blank" rel="noreferrer">
              文档
            </a>
          </div>
          <div className="action">
            <Button></Button>
          </div>
        </div>
      </>
  )
}