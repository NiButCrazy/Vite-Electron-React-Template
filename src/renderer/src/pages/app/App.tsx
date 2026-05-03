import { Outlet } from '@tanstack/react-router'
import { Versions } from '@components/version'
import './assets/styles/App.module.less'


function App() {
  return (
    <>
      <Outlet />
      <Versions />
    </>
  )
}

export default App
