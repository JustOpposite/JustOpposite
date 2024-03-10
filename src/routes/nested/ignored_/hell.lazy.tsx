import { createLazyFileRoute } from '@tanstack/react-router'

function Hell() {
  return (
    <div className="p-2">Hello from nested lazy hell with path ignored!</div>
  )
}

export const Route = createLazyFileRoute('/nested/ignored/hell')({
  component: Hell
})
