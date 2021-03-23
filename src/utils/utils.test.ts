import { slugsFromFilenames } from './index'

describe('Utils', () => {
  describe('slugsFromFilenames()', () => {
    test('converts require.context to array of slugs', () => {
      const slugs = slugsFromFilenames({
        keys: () => [
          './file1.ts',
          './table-row.ejs',
          './dir/dir/another.jpeg',
          './test.md'
        ],
        resolve: (id) => `${id}`,
        id: 'a'
      } as __WebpackModuleApi.RequireContext)

      expect(slugs).toEqual(['file1', 'table-row', 'another', 'test'])
    })
  })
})
