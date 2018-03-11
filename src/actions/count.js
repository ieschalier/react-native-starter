// @flow

import { INCREMENT, DECREMENT } from '../constants/actionsType'
import type { GenericAction as Action } from '../types/Action'

export const increment = (): Action => ({
  type: INCREMENT,
})

export const decrement = (): Action => ({
  type: DECREMENT,
})
