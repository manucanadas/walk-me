export const GOT_COMPLETED_WALKS = 'GET_COMPLETED_WALKS'
export const ADDED_COMPLETED_WALK = 'ADD_COMPLETED_WALK'
export const DELETED_COMPLETED_WALK = 'DEL_COMPLETED_WALK'
export const GOT_WALKS = 'GOT_WALKS'
import request from 'superagent'
import {fetchCompletedWalksAPI} from '../apis/walks'



export function gotCompletedWalks (walks){
  return {
    type: GOT_COMPLETED_WALKS,
    walks
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



export function fetchCompletedWalks() {
  return dispatch => {
    return fetchCompletedWalksAPI()
      .then(walks => {
        dispatch(gotCompletedWalks(walks))
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
