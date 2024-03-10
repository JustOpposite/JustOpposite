import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'
import ErrorFallback from '@/components/shared/ErrorFallback'
import SkeletonDemo from '@/components/shared/SkeletonDemo'
import { doSomethingOnReset } from '@/utils/lib'
import CountriesWithQuery from '@/components/shared/CountriesWithQuery'

export default function HomeWQ() {
  return (
    <div>
      <p className="mb-5">Load Countries...</p>
      <p className="mb-5">
        (Shadcn ui and React ErrorBoundary and Suspense demo)
      </p>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => doSomethingOnReset()}
        // resetKeys
      >
        <Suspense fallback={<SkeletonDemo />}>
          <CountriesWithQuery />
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
