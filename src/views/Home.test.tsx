import { render, screen } from '@testing-library/react'
import HomeWithSuspense from './HomeWithSuspense'

it('should have Hello World', () => {
  // ARRANGE (setup and render components)
  render(<HomeWithSuspense />)

  // ACT (for things such as button click or some other user action simulation)

  // EXPECT (query and compare expected values)
  expect(screen.queryByText(/Load Countries.../)).toBeVisible()
})
