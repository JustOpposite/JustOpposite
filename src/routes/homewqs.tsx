import { createFileRoute } from '@tanstack/react-router'
import HomeQueryAndSuspense from '@/views/HomeQueryAndSuspense'
import { countriesQueryOption } from '@/utils/queryOptions'
import SkeletonDemo from '@/components/shared/SkeletonDemo'

export const Route = createFileRoute('/homewqs')({
  loader: (opts) =>
    opts.context.queryClient.ensureQueryData(countriesQueryOption()),
  component: HomeQueryAndSuspense,
  pendingComponent: SkeletonDemo
})
