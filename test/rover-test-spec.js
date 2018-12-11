'use strict'
const chai = require('chai')
const expect = chai.expect

const location = '1 2 N'
const moves = 'LMLMLMLMM'
const boundary = '5 5'

const Rover = require('../src/Rover')
const Plateau = require('../src/Plateau')

describe('Rover', () => {
  it('takes a string as a command and returns an object with coordinates and orientation', () => {
    const rover = new Rover(location, moves)
    expect(rover.coordinates.x).to.equal(1)
  })

  it('has a method \'getNewcoordinates\' which returns the new coordinates based on a move but does NOT change the rover coordinates', () => {
    const rover = new Rover(location, moves)

    const newcoordinates = rover.getNewCoordinates(rover.orientation)
    expect(rover.coordinates.x).to.equal(1)
    expect(rover.coordinates.y).to.equal(2)
    expect(newcoordinates.x).to.equal(1)
    expect(newcoordinates.y).to.equal(3)
  })

  it('has a method \'move\' that updates the rover\'s coordinates based on its orientation', () => {
    const rover = new Rover(location, moves)
    const plateau = new Plateau(boundary)
    rover.executeCommands(plateau)
    expect(rover.coordinates.x).to.equal(1)
    expect(rover.coordinates.y).to.equal(3)
    expect(rover.orientation).to.equal('N')
  })

  it('has a does not go out of bounds', () => {
    const rover = new Rover('0 0 W', 'MLM')
    const plateau = new Plateau('1 1')
    rover.move(plateau)
    expect(rover.coordinates.x).to.equal(0)
    expect(rover.coordinates.y).to.equal(0)
  })

  it('does not go out of bounds', () => {
    const rover = new Rover('0 0 N', 'MMRMM')
    const plateau = new Plateau('1 1')
    rover.executeCommands(plateau)
    expect(rover.coordinates.x).to.equal(1)
    expect(rover.coordinates.y).to.equal(1)
  })

  it('has a method \'turnLeft\' that updates the rover\'s orientation based on the move', () => {
    const rover = new Rover(location, moves)
    rover.turnLeft()
    expect(rover.orientation).to.equal('W')
    rover.turnLeft()
    expect(rover.orientation).to.equal('S')
  })

  it('has a method \'turnRight\' that updates the rover\'s orientation based on the move', () => {
    const rover = new Rover(location, moves)
    rover.turnRight()
    expect(rover.orientation).to.equal('E')
    rover.turnRight()
    expect(rover.orientation).to.equal('S')
  })
})
