import { createBrowserRouter, redirect } from 'react-router'
import App from '@components/app'
import { Home } from '@components/pages'


const index = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home }
    ]
  },
  {
    path: '/index.html',
    loader: () => redirect('/')
  },
])

export default index
