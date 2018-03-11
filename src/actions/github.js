import {
  GITHUB_USER_LOADING,
  GITHUB_USER_SUCCESS,
  GITHUB_USER_ERROR,
  GITHUB_USER_CLEAR,
} from '../constants/actionsType'

export const fetchGithubUser = username => async dispatch => {
  dispatch({ type: GITHUB_USER_LOADING })

  const res = await fetch(`https://api.github.com/users/${username}`)

  if (res.ok) {
    const user = await res.json()
    dispatch({
      type: GITHUB_USER_SUCCESS,
      user,
    })
  } else {
    dispatch({
      type: GITHUB_USER_ERROR,
    })
  }
}

export const clearGithubUser = () => ({ type: GITHUB_USER_CLEAR })
