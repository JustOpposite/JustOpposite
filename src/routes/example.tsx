import { createFileRoute } from '@tanstack/react-router'
import {
  exampleQueryOption1WithRealFetch,
  exampleQueryOption2SimulatedFetch,
  exampleQueryOption3SimulatedFetch
} from '@/utils/exampleQueryOptions'
import ExampleView from '@/views/ExampleView'
// import SkeletonDemo from '@/components/shared/SkeletonDemo'

export const Route = createFileRoute('/example')({
  // TODO: need to investigate why loading is happening once here in view and once in component, cache doesn't seem to be leveraged
  loader: async (opts) => {
    const promise1 = opts.context.queryClient.ensureQueryData(
      exampleQueryOption1WithRealFetch()
    )
    const promise2 = opts.context.queryClient.ensureQueryData(
      exampleQueryOption2SimulatedFetch()
    )
    const promise3 = opts.context.queryClient.ensureQueryData(
      exampleQueryOption3SimulatedFetch()
    )
    const [myData1, myData2, myData3] = await Promise.all([
      promise1,
      promise2,
      promise3
    ])
    return { myData1, myData2, myData3 }
  },
  component: ExampleView
  // pendingComponent: SkeletonDemo
  // errorComponent
})
