const listHelper = require('../utils/list_helper')

// test('dummy returns one', () => {
//   const blogs = []

//   const result = listHelper.dummy(blogs)
//   expect(result).toBe(1)
// })


describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]
  
    test('when list has only one blog, equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(5)
    })
  })

  describe('favorite blog', () => {
    test('returns empty object, if array is empty', () => {
      const blogs = []
      const result = listHelper.favoriteBlog(blogs)
      expect(result).toEqual({})
    })
  
    test('returns blog, if only one in list', () => {
      const blogs = [{ name: 'Test with one in list', likes: 5 }]
      const result = listHelper.favoriteBlog(blogs)
      expect(result).toEqual(blogs[0])
    })
  
    test('returns blog with most likes, if more in list', () => {
      const blogs = [{ name: 'test with two in list', likes: 20 }, { name: 'test 1', likes: 7 }, { name: 'test 1', likes: 2 }]
      const result = listHelper.favoriteBlog(blogs)
      expect(result).toEqual(blogs[0])
    })
  
  })