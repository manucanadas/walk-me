import search from './search'

describe('search reducer tests',() => {
  test('empty (initial) state', () => {
    const expected = []

    const actual = search([], {})

    expect(actual).toEqual(expected)

  })
})