import { FallbackProps } from 'react-error-boundary'
import { Button } from '../ui/button'

export default function ErrorFallback({
  error,
  resetErrorBoundary
}: FallbackProps) {
  return (
    <div>
      There was an error!{' '}
      <Button onClick={() => resetErrorBoundary()}>Try again</Button>
      <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
    </div>
  )
}
