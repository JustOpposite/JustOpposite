import { createFileRoute, useBlocker } from '@tanstack/react-router'
import { useState } from 'react'

function Blocked() {
  const [isThereUnfinishedTasks] = useState(true)

  useBlocker(
    () =>
      window.confirm('Are you sure you want to navigate away from this page?'),
    isThereUnfinishedTasks
  )
  return <div className="p-2">Hello from stack blocked component!</div>
}

export const Route = createFileRoute('/blocked')({
  component: Blocked
})
