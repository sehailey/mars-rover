class Coordinates {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  getNewCoordinates(orientation, step) {
    if (!step) step = 1
    switch (orientation) {
    case 'N': {
      return { x: this.x, y: this.y + step }
    }
    case 'S': {
      return { x: this.x, y: this.y - step }
    }
    case 'E': {
      return { x: this.x + step, y: this.y }
    }
    case 'W': {
      return { x: this.x - step, y: this.y }
    }
    default:
      return { x: this.x, y: this.y }
    }
  }
}

module.exports = Coordinates
