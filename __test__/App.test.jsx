import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from './utils/test-utils'
import App from '../src/App'

describe('Simple working App test', () => {
  test('renders the first route that matches the URL', () => {
    render(<App />, { wrapper: BrowserRouter })
    expect(screen.getByText('Weather')).toBeInTheDocument()
  })

  test('render footer', () => {
    render(<App />, { wrapper: BrowserRouter })
    screen.getByText('Built by')
    screen.getByText('Luis Gabriel Janco')
  })
})
