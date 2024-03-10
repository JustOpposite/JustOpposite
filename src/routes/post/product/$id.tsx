/* eslint-disable @typescript-eslint/no-use-before-define */
import { createFileRoute } from '@tanstack/react-router'

function fetchPost(id: string) {
  // do actual fetching
  return id
}

export const Route = createFileRoute('/post/product/$id')({
  // In a loader
  loader: ({ params }) => fetchPost(params.id),
  // Or in a component
  component: ProductComponent
})

function ProductComponent() {
  const { id } = Route.useParams()
  return <div>product ID: {id}</div>
}
