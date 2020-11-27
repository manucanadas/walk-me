 import request from 'superagent'



export function getWalksAPI () {
}


export function fetchWalks () {

}

export function fetchWalk () {

}

export function fetchSavedWalksByUser () {

}

export function fetchCompletedWalksAPI (){
  return request
  .get('/api/v1/walks/completed')
  .then (res =>res.body)
}
