import { loading } from '../constants/states'
import {
  GITHUB_USER_LOADING,
  GITHUB_USER_SUCCESS,
  GITHUB_USER_ERROR,
  GITHUB_USER_CLEAR,
} from '../constants/actionsType'

const defaultState = {
  user: null,
  loading: loading.SUCCESS,
}

const github = (state = defaultState, action) => {
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
