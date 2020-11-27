export const GOT_COMPLETED_WALKS = 'GET_COMPLETED_WALKS'
export const ADDED_COMPLETED_WALK = 'ADD_COMPLETED_WALK'
export const DELETED_COMPLETED_WALK = 'DEL_COMPLETED_WALK'
export const GOT_WALKS = 'GOT_WALKS'
import request from 'superagent'



export function setCompletedWalks (walks){
  return {
    type: GOT_COMPLETED_WALKS,
  }}

export const gotWalks = walks => {
  return {
    type: 'GOT_WALKS',
    walks
  }
}

export function addedCompletedWalks (walk){
  return {
    type: ADDED_COMPLETED_WALKS,
    walk
  }
}

export function deletedCompletedWalks (id){
  return {
    type: DELETED_COMPLETED_WALKS,
    id: id
  }
}



export function fetchWalks() {
  return dispatch => {
    return fetchWalksAPI()
      .then(tasks => {
        dispatch(setCompletedWalks(walks))
        return null
      })
    }
  }
export const fetchWalks = () => {
  return dispatch => {
    return request
      .get('/api/v1/walks')
      .then(res => {
        return dispatch(gotWalks(res.body))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
