import { combineReducers } from 'redux'

import auth from './auth'
import completedWalks from './completedWalks'
import savedWalks from './savedWalks'
import search from './search'
import walks from './walks'

export default combineReducers({
  auth,
  completedWalks,
  savedWalks,
  search,
  walks
})
