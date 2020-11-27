import auth from './auth'

describe('auth reducer tests', () => {
  test('default case', () => {
    const expected = []

    const actual = auth([], {})

    expect(actual).toEqual(expected)
  })

  test('initial state', () => {
    const expected = {
      loggedIn: true,
      user: {
        id: 1,
        username: 'walkymcwalkface'
      }
    }

    const actual = auth(undefined, {})

    expect(actual).toEqual(expected)
  })
})
