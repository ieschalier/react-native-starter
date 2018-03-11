// @flow

import type { Store as ReduxStore } from 'redux'
// import type { State } from './Sate'
import type { Action } from './Action'

// Use State type cause some error with flow-typed redux
export type Store = ReduxStore<{}, Action>
export type ConfigureStore = () => Promise<Store>
