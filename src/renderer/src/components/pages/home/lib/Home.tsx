import Button from "@components/button";
import electronLogo from "../assets/electron.svg";
import s_ from "../styles/Home.module.less"


export default function Home() {

  return (
      <>
        <img alt="logo" className={ s_.logo } src={ electronLogo } />
        <div className={ s_.creator }>由 electron-vite 强力驱动</div>
        <div className={ s_.text }>
          通过 <span className={ s_.react }>React</span>
          &nbsp;和 <span className={ s_.ts }>TypeScript</span>
          &nbsp;构建一个 Electron 应用
        </div>
        <p className={ s_.tip }>
          尝试按下 <code>F12</code> 来使用开发者工具
        </p>
        <div className={ s_.actions }>
          <div className={ s_.action }>
            <a href="https://cn.electron-vite.org/" target="_blank" rel="noreferrer">
              文档
            </a>
          </div>
          <div className={ s_.action }>
            <Button />
          </div>
        </div>
      </>
  )
}
