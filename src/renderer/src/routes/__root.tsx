import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { createRootRoute } from '@tanstack/react-router'
import { App } from '@renderer/pages'

// 创建根路由
export const Route = createRootRoute({
  component: _RootComponent
})

function _RootComponent() {
  return (
    <>
      <App />
      <TanStackRouterDevtools />
    </>
  )
}