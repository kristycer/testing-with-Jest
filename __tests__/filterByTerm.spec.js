const filterByTerm = require('../src/filterByTerm')

describe('Filter function', () => {
  test('it should filter by a search tearm (link)', () => {
    const input = [
      { id: 1, url: 'https://www.test.com' },
      { id: 2, url: 'https://www.link2.com' },
    ]
    const output = [{ id: 2, url: 'https://www.link2.com' }]

    expect(filterByTerm(input, 'link')).toEqual(output)
    expect(filterByTerm(input, 'LINK')).toEqual(output)
  })

  test('it should throw when searchTerm is jjj empty string', () => {
    const input = []
    expect(() => {
      filterByTerm(input, '')
    }).toThrowError(Error('searchTerm cannot be empty'))
  })
})
