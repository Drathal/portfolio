import compose from './compose'

const person = {
  name: 'Johna'
}

const getName = (p: typeof person, x?: string) => `${p.name}-${x}`
const getLength = (str: string) => str.length
const isEven = (num: number) => num % 2 === 0

describe('utils', () => {
  describe('compose()', () => {
    test('pipe 3 functions', () => {
      const resultCompose = compose(isEven, getLength, getName)

      expect(resultCompose(person, 'prefix')).toEqual(true)
    })
  })
})
