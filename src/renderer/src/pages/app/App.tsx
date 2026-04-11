import { Versions } from '@components/version'
import { Outlet } from 'react-router'
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
