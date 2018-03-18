import React from 'react'
import renderer from 'react-test-renderer'
import { createMockReduxStore } from '../helpers/jest'
import App from '../index'

it('renders without crashing', () => {
  const store = createMockReduxStore({})
  const rendered = renderer.create(<App store={store} />)
  expect(rendered.toJSON()).toMatchSnapshot()
})
