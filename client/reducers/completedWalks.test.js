import completedWalks from './completedWalks'

describe('completedWalks reducer tests', () => {
  test('default case', () => {
    const expected = []

    const actual = completedWalks([], {})

    expect(actual).toEqual(expected)
  })

  test('inital state', () => {
    const expected = [0, 1, 2]

    const actual = completedWalks(undefined, {})

    expect(actual).toEqual(expected)
  })
})
