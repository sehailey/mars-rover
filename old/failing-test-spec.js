'use strict'
const command = '5 4\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM'
//const command = '5 4\n1 2 N\nLMLMLMLMM'
const chai = require('chai')
const expect = chai.expect
const Mission = require('../mission')

describe('Mission', () => {
  it('Mission.getBoundary should take a command and return an object with x and y as integers', () => {
    const boundary = Mission.getBoundary(command)
    expect(boundary.x).to.equal(5)
    expect(boundary.y).to.equal(4)
  })

  it('Mission.createRover takes a loction string and a moves string and should return an object with location and moves ', () => {
    const location = '1 2 N'
    const moves = 'LMLMLMLM'
    const rover = Mission.createRover(location, moves)
    expect(rover.position.x).to.equal(1)
    expect(rover.position.y).to.equal(2)
    expect(rover.orientation).to.equal('N')
  })

  it('Mission.createAllRovers takes a command string and should return an array containing all of the rovers', () => {
    const rovers = Mission.createAllRovers(command)
    expect(rovers.length).to.equal(2)
  })

  it('Mission.moveRover takes a rover and returns an object with its final location', () => {
    const location = '1 2 N'
    const moves = 'R'
    const rover = Mission.createRover(location, moves)
    const movedRover = Mission.moveRover(rover)
    //expect(movedRover.position.x).to.equal(1)
    //expect(movedRover.position.y).to.equal(3)
    expect(movedRover.orientation).to.equal('E')
  })
  //
  //   // it('has a property \'rovers\' which includes all of the created rovers', () => {
  //   //it("has")
  // })
  //
  // describe('createRover', () => {
  //   let mission
  //   beforeEach(() => {
  //     mission = new Mission(command)
  //   })
})
