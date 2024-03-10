import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Link,
  RouterProvider,
  createHashHistory,
  createRouter
} from '@tanstack/react-router'
// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

const hashHistory = createHashHistory()

// Create a new router instance
const router = createRouter({
  routeTree,
  history: hashHistory,
  // preload lazy routes if user hover over a lazy link more than .5 second
  defaultPreload: 'intent',
  defaultPreloadDelay: 500,
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

// Create a query client
const queryClient = new QueryClient()

// Render the app
const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  )
}
