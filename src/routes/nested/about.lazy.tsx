import { createLazyFileRoute } from '@tanstack/react-router'

function About() {
  return <div className="p-2">Hello from nested lazy About!</div>
}

export const Route = createLazyFileRoute('/nested/about')({
  component: About
})
