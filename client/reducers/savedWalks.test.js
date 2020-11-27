import savedWalks from './savedWalks'

describe('savedWalks reducer tests', () => {
  test('default case', () => {
    const expected = []

    const actual = savedWalks([], {})

    expect(actual).toEqual(expected)
  })

  test('inital state', () => {
    const expected = [3, 4, 5]

    const actual = savedWalks(undefined, {})

    expect(actual).toEqual(expected)
  })
})
