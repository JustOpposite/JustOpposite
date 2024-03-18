/* eslint-disable react/no-unstable-nested-components */
import CountriesWithQuery from '@/components/shared/CountriesWithQuery'
import { Button } from '@/components/ui/button'
import SkeletonDemoAlt from '@/components/shared/SkeletonDemoAlt'
import BoundaryContainer from '@/components/shared/BoundaryContainer'

const errorFallback = ({
  error,
  resetErrorBoundary
}: {
  error: any
  resetErrorBoundary: any
}) => (
  <div>
    There was an error!{' '}
    <Button onClick={() => resetErrorBoundary()}>Try again</Button>
    <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
  </div>
)

export default function HomeQueryAndSuspense() {
  return (
    <div>
      <p className="mb-5">Tanstack Query Load Countries with suspense...</p>
      <BoundaryContainer
        errorFallback={errorFallback}
        suspenseFallback={<SkeletonDemoAlt />}
      >
        <p className="mb-5">
          (Shadcn ui and React ErrorBoundary and Suspense demo)
        </p>
        <CountriesWithQuery />
        <p className="mt-5">
          When component rendered without failure, to retry, click on browser
          refresh. Child component simulates failure rate of 50% of the
          randomized time.
        </p>
      </BoundaryContainer>
    </div>
  )
}
