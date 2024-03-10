import { createLazyFileRoute } from '@tanstack/react-router'

function Nested() {
  return <div className="p-2">Hello from nested lazy index</div>
}

export const Route = createLazyFileRoute('/nested/')({
  component: Nested
})
