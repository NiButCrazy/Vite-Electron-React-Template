import { createHashRouter } from 'react-router'
import { Home, App } from '@renderer//pages'


const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home }
    ]
  }
])

export default router
