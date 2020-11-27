
import{GOT_COMPLETED_WALKS, ADDED_COMPLETED_WALK, DELETED_COMPLETED_WALK} from '../actions'


const initialState = [0, 1, 2]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_COMPLETED_WALKS:
      return action.walks
    case ADDED_COMPLETED_WALK:
      return [...state, action.walk]
    case DELETED_COMPLETED_WALK:
      return state.filter((walk)=> walk !==action.id)
    default:
      return state
  }
}

export default reducer
