import { createFileRoute } from '@tanstack/react-router'

function Standard() {
  return <div className="p-2">Hello from standard static route!</div>
}

export const Route = createFileRoute('/standard')({
  component: Standard,
  // Preload the route again if the preload cache is older than 10 seconds
  preloadStaleTime: 10_000
})
