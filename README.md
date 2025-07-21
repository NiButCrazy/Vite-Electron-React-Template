# Vite + Electron + React + TypeScript 创建模板
个人自用

## 安装使用
```shell
npm create nbc-app < projectName | 可选 >
# yarn create nbc-app < projectName | 可选 >
# pnpm create nbc-app < projectName | 可选 >
```
> 当然也可以直接克隆项目
### 注意事项
根目录的 `static` 目录下的静态资源被引用时最好加入 `?asset` 作为后缀，路径正常填写

而 `public` 目录下的静态资源被引用时无需添加后缀，但路径需要以 `/` 开头

> 开发扩展方面，支持 React DevTools 等扩展，感兴趣的也可以查看个人 [汉化版 React DevTools](https://github.com/NiButCrazy/react-devtools-extension-chinese)

### 第三方库
- React Router - 路由管理
- Zustand - 状态管理
- Less - 样式预处理

## 项目配置

### 安装依赖

```bash
$ yarn
```

### 运行调试

```bash
# 开发调试
$ yarn dev

# 构建预览
$ yarn start

# 渲染器调试
$ yarn dev --rendererOnly

# 热重载调试
$ yarn dev --w
```

### 构建发布

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```
