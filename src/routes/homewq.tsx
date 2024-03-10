import { createFileRoute } from '@tanstack/react-router'
import HomeWQ from '@/views/HomeWQ'

export const Route = createFileRoute('/homewq')({
  component: HomeWQ
})
