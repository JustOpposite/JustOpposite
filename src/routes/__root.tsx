/* eslint-disable import/no-extraneous-dependencies */
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import {
  createRootRouteWithContext,
  Link,
  Outlet
} from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <ul>
          <li>
            <Link
              to="/"
              className="[&.active]:font-bold"
            >
              [Load Countries with Suspense and Error Boundary]
            </Link>
          </li>
          <li>
            <Link
              to="/homewqs"
              className="[&.active]:font-bold"
            >
              [Load Countries using Query with Suspense and Error Boundary]
            </Link>
          </li>
          <li>
            <Link
              to="/homewq"
              className="[&.active]:font-bold"
            >
              [Load Countries using Query and leverage router pending and error
              state]
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="[&.active]:font-bold"
            >
              [Lazy load About]
            </Link>
          </li>
          <li>
            <Link
              to="/google"
              className="[&.active]:font-bold"
            >
              [Navigate to Google]
            </Link>
          </li>
          <li>
            <Link
              to="/standard"
              className="[&.active]:font-bold"
            >
              [Static route]
            </Link>
          </li>
          <li>
            <Link
              to="/blocked"
              className="[&.active]:font-bold"
            >
              [Static route with navigation block]
            </Link>
          </li>
          <li>
            <Link
              to="/nested"
              className="[&.active]:font-bold"
              activeOptions={{ exact: true }}
            >
              [Nested Lazy loading]
            </Link>
          </li>
          <li>
            <Link
              to="/nested/about"
              className="[&.active]:font-bold"
              activeProps={{
                style: {
                  color: 'red'
                }
              }}
            >
              [Nested Lazy loading of About]
            </Link>
          </li>
          <li>
            <Link
              to="/post/$id"
              params={{
                id: '54188'
              }}
              className="[&.active]:font-bold"
            >
              [Post a specific id 54188]
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />

      {/* This is only used for development debug, remove before release */}
      <TanStackRouterDevtools />
    </>
  )
})
