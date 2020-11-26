import auth from './auth'

describe('auth reducer tests',() => {
  test('empty (initial) state', () => {
    const expected = []

    const actual = auth([], {})

    expect(actual).toEqual(expected)

  })
})