import { GOT_WALKS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_WALKS:	
      return action.walks
    default:
      return state
  }
}

export default reducer
