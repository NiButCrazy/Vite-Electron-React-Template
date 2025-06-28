import Versions from '@components/version'
import { Outlet } from "react-router";
import '../styles/index.css'
import '../styles/App.module.css'

function App(): React.JSX.Element {
  return (
    <>
      <Outlet />
      <Versions />
    </>
  )
}

export default App
