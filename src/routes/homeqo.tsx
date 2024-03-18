import { createFileRoute } from '@tanstack/react-router'
import HomeQueryOnly from '@/views/HomeQueryOnly'
import { exampleQueryOption1WithRealFetch } from '@/utils/exampleQueryOptions'

export const Route = createFileRoute('/homeqo')({
  loader: (opts) =>
    opts.context.queryClient.ensureQueryData(
      exampleQueryOption1WithRealFetch()
    ),
  component: HomeQueryOnly
})
