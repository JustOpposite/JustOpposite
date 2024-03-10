/* eslint-disable @typescript-eslint/no-use-before-define */
import { createFileRoute } from '@tanstack/react-router'

function fetchPost(id: string) {
  // do actual fetching
  return id
}

export const Route = createFileRoute('/post/parts/$id')({
  // In a loader
  loader: ({ params }) => fetchPost(params.id),
  // Or in a component
  component: PostComponent
})

function PostComponent() {
  const { id } = Route.useParams()
  return <div>part ID: {id}</div>
}
