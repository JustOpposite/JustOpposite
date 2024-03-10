import { createLazyFileRoute } from '@tanstack/react-router'
import HomeWithSuspense from '@/views/HomeWithSuspense'

export const Route = createLazyFileRoute('/')({
  component: HomeWithSuspense
})
