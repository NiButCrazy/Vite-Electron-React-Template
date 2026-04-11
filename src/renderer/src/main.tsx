import '@unocss/reset/normalize.css'
import '@shared/styles/global.less'
import 'virtual:uno.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from '@renderer/routes/router'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>
)
