import search from './search'

describe('search reducer tests', () => {
  test('default case', () => {
    const expected = []

    const actual = search([], {})

    expect(actual).toEqual(expected)
  })

  test('inital state', () => {
    const expected = {
      lat: -41.2967354,
      long: 174.7741535,
      text: 'Te Aro'
    }

    const actual = search(undefined, {})

    expect(actual).toEqual(expected)
  })
})
