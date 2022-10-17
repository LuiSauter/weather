import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Button from '.'

describe('Component <Button />', () => {
  test('render button', async () => {
    render(<Button />)
    const button = await screen.findByRole('button')
    expect(button).toBeDefined()
  })
})
