import auth from './auth'

describe('auth reducer tests', () => {
  test('default case', () => {
    const expected = []

    const actual = auth([], {})

    expect(actual).toEqual(expected)
  })

  test('initial state', () => {
    const expected = {
      loggedIn: false,
      user: null
    }

    const actual = auth(undefined, {})

    expect(actual).toEqual(expected)
  })
})
