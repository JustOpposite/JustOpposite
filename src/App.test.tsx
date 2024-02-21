import { render, screen } from '@testing-library/react'
import App from './App'

it('should have Hello World', () => {
  // ARRANGE (setup and render components)
  render(<App />)

  // ACT (for things such as button click or some other user action simulation)

  // EXPECT (query and compare expected values)
  expect(screen.queryByText(/Load Countries.../)).toBeVisible()
})
