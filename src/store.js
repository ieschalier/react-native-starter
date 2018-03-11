// @flow
/* eslint-disable no-underscore-dangle, global-require */
/* globals window */

import { createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'
import reducer from './reducer'
import type { Store, ConfigureStore } from './types/Store'

let store: Store

export const saveState = async () => {
  if (store) {
    await AsyncStorage.setItem('store', JSON.stringify(store.getState()))
    setTimeout(saveState, 1000)
  } else {
    console.warn('store is not defined')
  }
}

export const configureStore: ConfigureStore = async () => {
  const initialStore: string = await AsyncStorage.getItem('store')

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
      : compose

  const enhancer = composeEnhancers(applyMiddleware(thunk))

  store = createStore(reducer, initialStore ? JSON.parse(initialStore) : {}, enhancer)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  saveState()

  return store
}
