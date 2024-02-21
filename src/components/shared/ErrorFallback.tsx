import { FallbackProps } from 'react-error-boundary'
import { Button } from '../ui/button'

export default function ErrorFallback({
  error,
  resetErrorBoundary
}: FallbackProps) {
  return (
    <div role="alert">
      <pre className="mb-5">{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  )
}
