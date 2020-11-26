import request from 'superagent'
export const GOT_WALKS = 'GOT_WALKS'

export const gotWalks = walks => {
  return {
    type: 'GOT_WALKS',
    walks
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
