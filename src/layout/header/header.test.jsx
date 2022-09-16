import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '../../../__test__/utils/test-utils'
import Header from '.'

describe('Component </Header>', () => {
  test('must display a title', () => {
    render(<Header />)
    expect(screen.getByText(/weather/i)).toBeInTheDocument()
  })
})
