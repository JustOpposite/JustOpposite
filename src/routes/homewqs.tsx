import { createFileRoute } from '@tanstack/react-router'
import HomeQueryAndSuspense from '@/views/HomeQueryAndSuspense'
import { countriesQueryOption } from '@/utils/queryOptions'

export const Route = createFileRoute('/homewqs')({
  loader: (opts) =>
    opts.context.queryClient.ensureQueryData(countriesQueryOption()),
  component: HomeQueryAndSuspense
})
