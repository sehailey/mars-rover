'use strict'
const chai = require('chai')
const expect = chai.expect
const Plateau = require('../src/Plateau')
describe('Plateau', () => {
  it('is a class constructed with x,y coordinates', () => {
    const plateau = new Plateau('5 5')
    expect(plateau.boundary.x).to.equal(5)
  })

  it('Plateau.isInBounds takes x,y coordinates and returns true if that position is within the plateau bounds and false if it is not', () => {
    const plateau = new Plateau('5 5')
    expect(plateau.isInBounds({ x: 6, y: 7 })).to.equal(false)
    expect(plateau.isInBounds({ x: -1, y: 2 })).to.equal(false)
    expect(plateau.isInBounds({ x: null, y: undefined })).to.equal(false)
  })
})
