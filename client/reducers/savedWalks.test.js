import savedWalks from './savedWalks'

describe('savedWalks reducer tests', () => {
  test('empty (initial) state', () => {
    const expected = []

    const actual = savedWalks([], {})

    expect(actual).toEqual(expected)
  })
})
