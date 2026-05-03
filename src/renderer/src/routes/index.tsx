import { createFileRoute } from '@tanstack/react-router'
import { Home } from '@renderer/pages'

export const Route = createFileRoute('/')({
  component: Home,
})

