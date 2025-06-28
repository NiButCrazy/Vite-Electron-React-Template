import Button from "@components/button";
import electronLogo from "../assets/electron.svg";
import styles from "../styles/Home.module.css"


export default function Home() {

  return (
      <>
        <img alt="logo" className={ styles.logo } src={ electronLogo } />
        <div className={ styles.creator }>由 electron-vite 强力驱动</div>
        <div className={ styles.text }>
          通过 <span className={ styles.react }>React</span>
          &nbsp;和 <span className={ styles.ts }>TypeScript</span>
          &nbsp;构建一个 Electron 应用
        </div>
        <p className={ styles.tip }>
          尝试按下 <code>F12</code> 来使用开发者工具
        </p>
        <div className={ styles.actions }>
          <div className={ styles.action }>
            <a href="https://cn.electron-vite.org/" target="_blank" rel="noreferrer">
              文档
            </a>
          </div>
          <div className={ styles.action }>
            <Button></Button>
          </div>
        </div>
      </>
  )
}
