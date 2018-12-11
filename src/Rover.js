const Coordinates = require('./Coordinates')

const { parseOrientation, parseCoordinates } = require('./parser')
const oriMap = {
  N: { L: 'W', R: 'E' },
  S: { L: 'E', R: 'W' },
  E: { L: 'N', R: 'S' },
  W: { L: 'S', R: 'N' }
}

class Rover {
  constructor(location, moves) {
    this.coordinates = new Coordinates(
      parseCoordinates(location).x,
      parseCoordinates(location).y
    )
    this.orientation = parseOrientation(location)
    this.moves = moves.split('')
  }

  getNewCoordinates() {
    return this.coordinates.getNewCoordinates(this.orientation)
  }

  move(plateau) {
    const newCoordinates = this.getNewCoordinates()
    if (
      plateau.isInBounds(newCoordinates) &&
      !plateau.isObstacle(newCoordinates)
    )
      this.coordinates = new Coordinates(newCoordinates.x, newCoordinates.y)
  }

  turnLeft() {
    this.orientation = oriMap[this.orientation].L
  }

  turnRight() {
    this.orientation = oriMap[this.orientation].R
  }

  currentLocation() {
    return `${this.coordinates.x} ${this.coordinates.y} ${this.orientation}`
  }
  executeCommands(plateau) {
    this.moves.map(move => {
      if (move === 'L') this.turnLeft()
      else if (move === 'R') this.turnRight()
      else if (move === 'M') this.move(plateau)
    })
    plateau.addObstacle(this.coordinates)
    return this
  }
}

module.exports = Rover
