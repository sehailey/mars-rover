const Coordinates = require('./Coordinates')

class Plateau {
  constructor(coordString) {
    this.boundary = new Coordinates(
      parseInt(coordString[0]),
      parseInt(coordString[2])
    )
  }
  isInBounds(coordinates) {
    return (
      coordinates.x >= 0 &&
      coordinates.x <= this.boundary.x &&
      coordinates.y >= 0 &&
      coordinates.y <= this.boundary.y
    )
  }
}

module.exports = Plateau
