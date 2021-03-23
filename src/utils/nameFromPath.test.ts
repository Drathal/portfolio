import { nameFromPath } from './nameFromPath'

describe('Utils', () => {
  describe('nameFromFilepath()', () => {
    test('converts path to slug', () => {
      const slug = nameFromPath('./dir/dir/another.jpeg')

      expect(slug).toEqual('another')
    })
  })
})
