// const initialState = [{
//   0: {
//     id: 1,
//     title: 'Silly walk',
//     description: 'This is a dummy walk',
//     duration: 10,
//     distance: 1000,
//     suburb: 'Te Aro',
//     dogFriendly: false,
//     difficultyRating: 3,
//     path: '[[-122.48369693756104, 37.83381888486939],[-122.48348236083984, 37.83317489144141],[-122.48339653015138, 37.83270036637107],[-122.48356819152832, 37.832056363179625]]',
//     img: 'http://lorempixel.com/400/200',
//     coords: {
//       start: '{lat: -41.2967354, 174.7741535,}',
//       end: '{lat: -41.2967354, 174.7741535,}'
//     },
//     comments: {
//       0: {
//         date: '1606337828',
//         username: 'seriousymcseriousface',
//         text: 'This walk was VERY silly',
//         img: 'http://lorempixel.com/400/201',
//         enjoymentRating: 4
//       }
//     }
//   },
//   1: {
//     id: 1,
//     title: 'Serious walk',
//     description: 'This is another dummy walk (only waaaay less fun)',
//     duration: 600,
//     distance: 23000,
//     suburb: 'Te Aro',
//     dogFriendly: true,
//     difficultyRating: 5,
//     path: '[[-122.48369693756104, 37.83381888486939],[-122.48348236083984, 37.83317489144141],[-122.48339653015138, 37.83270036637107],[-122.48356819152832, 37.832056363179625]]',
//     img: 'http://lorempixel.com/400/200',
//     coords: {
//       start: '{lat: -41.2967354, 174.7741535,}',
//       end: '{lat: -41.2967354, 174.7741535,}'
//     },
//     comments: {
//       0: {
//         date: '1606337323',
//         username: 'walkymcwalkface',
//         text: 'This walk was NOT VERY silly',
//         img: 'http://lorempixel.com/400/201',
//         enjoymentRating: 1
//       }
//     }
//   }
// }]

import { GOT_WALKS } from "../actions"

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
