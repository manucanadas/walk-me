import walks from './walks'

describe('walks reducer tests',() => {
  test('empty (initial) state', () => {
    const expected = []

    const actual = walks([], {})

    expect(actual).toEqual(expected)

  })
})