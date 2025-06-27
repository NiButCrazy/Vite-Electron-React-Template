import { useState } from 'react'
import styles from '../styles/Versions.module.css'

const is_electron = true ? window.electron: false

function Versions(): React.JSX.Element {
  if (is_electron) {
    const [versions] = useState(window.electron.process.versions)

    return (
        <ul className={styles.versions}>
          <li className="electron-version">Electron v{versions.electron}</li>
          <li className="chrome-version">Chromium v{versions.chrome}</li>
          <li className="node-version">Node v{versions.node}</li>
        </ul>
    )
  } else {
    return <ul className={styles.versions}><li className="electron-version">网页开发调试中</li></ul>
  }
}

export default Versions
