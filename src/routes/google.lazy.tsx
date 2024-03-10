/* eslint-disable no-alert */
import { createLazyFileRoute } from '@tanstack/react-router'

function External() {
  window.alert('Going to google site')
  window.location.href = 'https://www.google.com'
  return <div className="p-2">Leaving to goto Google now...</div>
}

export const Route = createLazyFileRoute('/google')({
  component: External
})
