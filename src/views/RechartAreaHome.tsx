import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'
import ErrorFallback from '@/components/shared/ErrorFallback'
import SkeletonDemo from '@/components/shared/SkeletonDemo'
import { doSomethingOnReset } from '@/utils/lib'
import RechartArea from '@/components/shared/RechartArea'

export default function RechartAreaHome() {
  return (
    <div>
      <p className="mb-5">Rechart area demo...</p>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => doSomethingOnReset()}
      >
        <Suspense fallback={<SkeletonDemo />}>
          <RechartArea />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
