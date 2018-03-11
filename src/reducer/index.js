import { combineReducers } from 'redux'
import count from './count'
import github from './github'

export default combineReducers({
  count,
  github,
})
