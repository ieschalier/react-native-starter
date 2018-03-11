import { createStore, applyMiddleware } from 'redux'
import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'
import reducer from './reducer'

let store

export const saveState = async () => {
  if (store) {
    await AsyncStorage.setItem('store', JSON.stringify(store.getState()))
    setTimeout(saveState, 1000)
  } else {
    console.warn('store is not defined')
  }
}

export const configureStore = async () => {
  const initialStore = await AsyncStorage.getItem('store')

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose

  const enhancer = composeEnhancers(applyMiddleware(thunk))

  store = createStore(
    reducer,
    initialStore ? JSON.parse(initialStore) : {},
    enhancer,
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  saveState()

  return store
}
