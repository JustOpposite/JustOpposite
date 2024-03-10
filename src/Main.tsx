/* eslint-disable import/no-extraneous-dependencies */
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  ErrorComponent,
  Link,
  RouterProvider,
  createHashHistory,
  createRouter
} from '@tanstack/react-router'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './Main.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { Spinner } from './components/shared/Spinner'

// Create a query client
const queryClient = new QueryClient()

const hashHistory = createHashHistory()

// Create a new router instance
const router = createRouter({
  routeTree,
  history: hashHistory,

  // preload lazy routes if user hover over a lazy link more than .5 second
  defaultPreload: 'intent',
  defaultPreloadDelay: 500,

  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,

  context: {
    queryClient
  },

  defaultPendingComponent: () => (
    <div className="p-2 text-2xl">
      <Spinner />
    </div>
  ),

  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,

  defaultNotFoundComponent: () => {
    return (
      <div>
        <p>Path not found!</p>
        <Link to="/">[Go home]</Link>
      </div>
    )
  }
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  )
}
