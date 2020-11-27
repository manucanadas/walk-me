import { GOT_SAVED_WALKS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_SAVED_WALKS:
      return action.ids
    default:
      return state
  }
}

export default reducer
