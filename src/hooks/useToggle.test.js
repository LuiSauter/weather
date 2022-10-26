import { act, renderHook } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { useToggle } from './useToggle'

const toggleHook = () => useToggle()

describe('useToggle', () => {
  test('should be a function', () => {
    expect(typeof useToggle).toBe('function')
  })

  test('should be false intital state', () => {
    const { result } = renderHook(toggleHook)
    expect(result.current.toggle).toBe(false)
  })

  test('should handleToggle be a function', () => {
    const { result } = renderHook(toggleHook)
    expect(typeof result.current.handleToggle).toBe('function')
  })

  test('should toggle state', () => {
    const { result } = renderHook(toggleHook)
    act(() => {
      result.current.handleToggle()
    })
    expect(result.current.toggle).toBe(true)
  })
})
