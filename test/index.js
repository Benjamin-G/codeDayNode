let expect    = require("chai").expect
let test = require('../app/index')


describe('this works', () => {
  describe('this function returns a value', () => {
    it('returns 4', () => {
      let x = test.testing()
      
      expect(x).to.equal(4)
    })
  })
})
