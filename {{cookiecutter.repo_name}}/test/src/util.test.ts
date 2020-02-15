import { expect } from 'chai'
import { flatten } from '../../src/util'

describe('Flatten', () => {
  const tests = ['a', 'a/bc', 'ab/cd/ef', 'ab//c/d/e']

  // tslint:disable-next-line mocha-no-side-effect-code
  tests.forEach(str => {
    const arr = str.split('/').map(item => item.split(''))
    const expected = str.replace(/\//g, '').split('')
    it(`flatten: ${JSON.stringify(arr)} => ${JSON.stringify(expected)}`, () => {
      const flat = flatten(arr)
      expect(flat).to.be.an('array')
      // $XealthFlowIgnore property not found (ordered)
      expect(flat).to.have.ordered.members(expected)
    })
  })
})
