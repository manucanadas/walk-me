import completedWalks from './completedWalks'

describe('completedWalks reducer tests',() => {
  test('empty (initial) state', () => {
    const expected = []

    const actual = completedWalks([], {})

    expect(actual).toEqual(expected)

  })
})