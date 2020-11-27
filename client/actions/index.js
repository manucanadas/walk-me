import request from 'superagent'
export const GOT_WALKS = 'GOT_WALKS'
export const GOT_SAVED_WALKS = 'GOT_SAVED_WALKS'

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

export const gotWalks = walks => {
  return {
    type: 'GOT_WALKS',
    walks
  }
}

export const fetchSavedWalks = (userId = 2) => {
  return dispatch => {
    return request
      .get('/api/v1/walks/saved/' + userId)
      .then(res => {
        return dispatch(gotSavedWalks(res.body))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const gotSavedWalks = ids => {
  return {
    type: GOT_SAVED_WALKS,
    ids
  }
}
