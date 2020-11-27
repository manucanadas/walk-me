import { GOT_WALKS }

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
