import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '../../../__test__/utils/test-utils'
import Header from '.'
import { BrowserRouter } from 'react-router-dom'

describe('Component <Header />', () => {
  test('must display a title', () => {
    render(<Header />, { wrapper: BrowserRouter })
    expect(screen.getByText(/weather/i)).toBeInTheDocument()
  })

  test('should display menu button', async () => {
    render(<Header />, { wrapper: BrowserRouter })
    const menuButton = await screen.findByRole('menu')
    expect(menuButton).toBeVisible()
  })

  test('should display navigation container', async () => {
    render(<Header />, { wrapper: BrowserRouter })
    const navigation = await screen.findByRole('barnavigation')
    expect(navigation).toBeVisible()
  })

  test('should show 4 buttons', async () => {
    render(<Header />, { wrapper: BrowserRouter })
    const menuItem = await screen.findAllByRole('menu-item')
    expect(menuItem).toHaveLength(4)
  })

  test.todo('unimplemented test')
})
