import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'
import Countries from '@/components/shared/Countries'
import ErrorFallback from '@/components/shared/ErrorFallback'
import SkeletonDemo from '@/components/shared/SkeletonDemo'
import { doSomethingOnReset } from '@/utils/lib'

export default function HomeWithSuspense() {
  return (
    <div>
      <p className="mb-5">Load Countries with suspense...</p>
      {/* <BoundaryContainer
        errorFallbackRender={errorFallback}
        suspenseFallbackRender={<SkeletonDemoAlt />}
      >
      </BoundaryContainer> */}
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => doSomethingOnReset()}
        // resetKeys
      >
        <Suspense fallback={<SkeletonDemo />}>
          <p className="mb-5">
            (Shadcn ui and React ErrorBoundary and Suspense demo)
          </p>
          <Countries />
          <p className="mt-5">
            When component rendered without failure, to retry, click on browser
            refresh. Child component simulates failure rate of 50% of the
            randomized time.
          </p>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
