import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from './utils/test-utils'
import App from '../src/App'

describe('simple working test', () => {
  test('renders the first route that matches the URL', async () => {
    render(<App />, { wrapper: BrowserRouter })
    expect(screen.getByText(/weather/i)).toBeInTheDocument()
  })
})
