/* global jest test expect */
const request = require('supertest')

const server = require('../../server/server')

// mocks the walksDB functions
jest.mock('../../server/db/walksDb', () => ({

  getAllWalks: () => Promise.resolve([
    {
      id: 1,
      title: 'Makara Walkway'
    },
    {
      id: 3,
      title: 'Mackenzie road track'
    }
  ]),

  getWalk: (id) => Promise.resolve(
    {
      id: id,
      title: 'Northern Walkway'
    }
  ),

  getSavedWalksByUser: (id) => Promise.resolve(
    { id: 1, user_id: 1, walk_id: 2, completed: true }
  )

  // getWalkComments: (id) => Promise.resolve(
  //   {
  //     id: 1,
  //     date: new Date().getTime(),
  //     user_id: 2,
  //     text: 'terrible walk, was fuck*n raining the entire time',
  //     img:'image.png',
  //     enjoyment: 1,
  //     walk_id: 1,
  //     flagged: true
  //   }
  // )

}))

// tests route returns all walks
test('/api/v1/walks returns all walks', () => {
  const expected = 2
  return request(server)
    .get('/api/v1/walks')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      return expect(res.body).toHaveLength(expected)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

// tests route returns a walk by id
// test('/api/v1/walks/:id returns a walk by id', () => {
//   const expected = 'Northern Walkway'
//   return request(server)
//     .get('/api/v1/walks/2')
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .then(res => {
//       expect(res.body.id).toBe(2)
//       expect(res.body.title).toBe(expected)
//     })
//     .catch(err => {
//       expect(err).toBeFalsy()
//     })
// })

// tests route returns all saved walks by user
// test('/api/v1/walks/saved/:id', () => {
//   const expected = 2
//   return request(server)
//     .get('/api/v1/saved/1')
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .then(res => {
//       expect(res.body.user_id).toBe(1)
//       expect(res.body.walk_id).toBe(expected)
//     })
//     .catch(err => {
//       expect(err).toBeFalsy()
//     })
// })
