// @flow

import { DECREMENT, INCREMENT } from '../constants/actionsType'
import type { GenericAction as Action } from '../types/Action'
import type { CountState as State } from '../types/Sate'

type Count = (state: State, action: Action) => State

const count: Count = (state = 2, action) => {
  switch (action.type) {
    case DECREMENT:
      return state - 1
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}

export default count
