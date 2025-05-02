import Versions from './components/Versions'
import { Outlet } from "react-router";
import './assets/styles/App.css'


function App(): React.JSX.Element {
  return (
    <>
      <Outlet></Outlet>
      <Versions></Versions>
    </>
  )
}

export default App
