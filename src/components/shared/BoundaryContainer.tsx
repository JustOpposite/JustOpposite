/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unstable-nested-components */
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'
import ErrorFallback from './ErrorFallback'
import SkeletonDemo from './SkeletonDemo'

export default function BoundaryContainer({
  children,
  errorFallback = ErrorFallback,
  suspenseFallback = SkeletonDemo
}: {
  children?: any
  errorFallback?: any
  suspenseFallback?: any
}) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          fallback={errorFallback}
          onReset={reset}
        >
          <Suspense fallback={suspenseFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
