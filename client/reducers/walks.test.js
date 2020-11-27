import walks from './walks'

describe('walks reducer tests', () => {
  test('default case', () => {
    const expected = []

    const actual = walks([], {})

    expect(actual).toEqual(expected)
  })

  test('inital state', () => {
    const expected = []

    const actual = walks(undefined, {})

    expect(actual).toEqual(expected)
  })
})
