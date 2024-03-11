import { createLazyFileRoute } from '@tanstack/react-router'
import RechartAreaHome from '@/views/RechartAreaHome'

export const Route = createLazyFileRoute('/rechart')({
  component: RechartAreaHome
})
