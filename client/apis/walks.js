 import request from 'superagent'



export function getWalksAPI () {
}


export function fetchWalksAPI () {

}

export function fetchWalkAPI () {

}

export function fetchSavedWalksByUserAPI () {

}

export function fetchCompletedWalksAPI (){
  return request
  .get('/api/v1/walks/completed')
  .then (res =>res.body)
}
