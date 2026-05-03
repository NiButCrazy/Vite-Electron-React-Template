import  { createHashHistory, createRouter } from '@tanstack/react-router'
import { routeTree } from '@renderer/routes/-routes.tree'

// 获取到 vite 基础 base 路径，当然生产环境也能使用
const basepath = import.meta.env.BASE_URL;

export const router = createRouter({
  basepath,
  routeTree,
  scrollRestoration: true,
  defaultPreload: 'intent',
  history: createHashHistory()
})

// 注册类型定义
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
