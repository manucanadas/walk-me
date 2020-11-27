import request from 'superagent'

const baseUrl = '/api/v1'

export function addCommentToWalkAPI (comment) {
  console.log(comment)
  return request.post(baseUrl + '/comment').send(comment)
    .catch(err => console.log(err))
}
