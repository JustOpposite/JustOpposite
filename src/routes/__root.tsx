import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link
          to="/"
          className="[&.active]:font-bold"
        >
          Countries
        </Link>{' '}
        <Link
          to="/about"
          className="[&.active]:font-bold"
        >
          About
        </Link>
      </div>
      <hr />
      <Outlet />

      {/* This is only used for development debug, remove before release */}
      <TanStackRouterDevtools />
    </>
  )
})
