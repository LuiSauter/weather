import React from 'react'
import { describe, test, expect } from 'vitest'
import renderer from 'react-test-renderer'
import Header from './'

const toJson = (component) => {
  const result = component.toJSON()
  expect(result).toBeDefined()
  return result
}

describe('Header', () => {
  test('must display a title', () => {
    const header = renderer.create(<Header />)

    const tree = toJson(header)
    expect(tree).toMatchSnapshot()
  })
})
