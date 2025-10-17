import { Versions } from '@components/version'
import { Outlet } from 'react-router'
import './styles/App.module.less'


function App(): React.JSX.Element {
  return (
    <>
      <Outlet />
      <Versions />
    </>
  )
}

export default App
