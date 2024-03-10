import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link
          to="/"
          className="[&.active]:font-bold"
        >
          [Countries]
        </Link>{' '}
        <Link
          to="/about"
          className="[&.active]:font-bold"
        >
          [LazyAbout]
        </Link>
        <Link
          to="/standard"
          className="[&.active]:font-bold"
        >
          [StaticStandard]
        </Link>
        <Link
          to="/blocked"
          className="[&.active]:font-bold"
        >
          [StaticBlocked]
        </Link>
        <Link
          to="/nested"
          className="[&.active]:font-bold"
          activeOptions={{ exact: true }}
        >
          [NestedIndexLazy]
        </Link>
        <Link
          to="/nested/about"
          className="[&.active]:font-bold"
          activeProps={{
            style: {
              color: 'red'
            }
          }}
        >
          [NestedLazyAbout]
        </Link>
        <Link
          to="/post/$id"
          params={{
            id: '54188'
          }}
          className="[&.active]:font-bold"
        >
          [post/54188]
        </Link>
      </div>
      <hr />
      <Outlet />

      {/* This is only used for development debug, remove before release */}
      <TanStackRouterDevtools />
    </>
  )
})
