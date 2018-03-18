/* eslint-disable import/prefer-default-export, import/no-extraneous-dependencies */
import configureStore from 'redux-mock-store'

export const createMockReduxStore = (initialState) => {
  const mockStore = configureStore()

  return mockStore(initialState)
}
