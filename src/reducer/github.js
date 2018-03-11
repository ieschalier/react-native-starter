// @flow

import { loading } from '../constants/states'
import {
  GITHUB_USER_LOADING,
  GITHUB_USER_SUCCESS,
  GITHUB_USER_ERROR,
  GITHUB_USER_CLEAR,
} from '../constants/actionsType'
import type { GithubState as State } from '../types/Sate'
import type { GithubAction as Action } from '../types/Action'

const defaultState: State = {
  user: undefined,
  loading: loading.SUCCESS,
}

type GitHub = (state: State, action: Action) => State

const github: GitHub = (state = defaultState, action) => {
  switch (action.type) {
    case GITHUB_USER_LOADING:
      return { ...state, loading: loading.LOADING }
    case GITHUB_USER_SUCCESS:
      return { ...state, user: action.user, loading: loading.SUCCESS }
    case GITHUB_USER_ERROR:
      return { ...state, loading: loading.ERROR }
    case GITHUB_USER_CLEAR:
      return defaultState
    default:
      return state
  }
}

export default github
