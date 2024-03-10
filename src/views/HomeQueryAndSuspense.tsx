/* eslint-disable react/no-unstable-nested-components */
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'
import SkeletonDemo from '@/components/shared/SkeletonDemo'
import CountriesWithQuery from '@/components/shared/CountriesWithQuery'
import { Button } from '@/components/ui/button'

export default function HomeQueryAndSuspense() {
  return (
    <div>
      <p className="mb-5">Tanstack Query Load Countries with suspense...</p>

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div>
                There was an error!{' '}
                <Button onClick={() => resetErrorBoundary()}>Try again</Button>
                <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
              </div>
            )}
            onReset={reset}
          >
            <Suspense fallback={<SkeletonDemo />}>
              <p className="mb-5">
                (Shadcn ui and React ErrorBoundary and Suspense demo)
              </p>
              <CountriesWithQuery />
              <p className="mt-5">
                When component rendered without failure, to retry, click on
                browser refresh. Child component simulates failure rate of 50%
                of the randomized time.
              </p>
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>

      {/* <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => doSomethingOnReset()}
        // resetKeys
      >
        <Suspense fallback={<SkeletonDemo />}>
          <p className="mb-5">
            (Shadcn ui and React ErrorBoundary and Suspense demo)
          </p>
          <CountriesWithQuery />
          <p className="mt-5">
            When component rendered without failure, to retry, click on browser
            refresh. Child component simulates failure rate of 50% of the
            randomized time.
          </p>
        </Suspense>
      </ErrorBoundary> */}
    </div>
  )
}
