import React from 'react'
import { describe, test, expect } from 'vitest'
import Header from '.'
import { render, screen } from '../../../__test__/utils/test-utils'

describe('Header', () => {
  test('must display a title', () => {
    render(<Header />)
    expect(screen.getByText(/weather/i)).toBeInTheDocument()
  })
})
