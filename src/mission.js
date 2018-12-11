const Rover = require('./Rover')
const Plateau = require('./Plateau')
const { parseRoverCommands } = require('./parser')

const mission = command => {
  const plateau = new Plateau(command.slice(0, 3))
  const commands = parseRoverCommands(command)
  const rovers = commands.map(
    command => new Rover(command.location, command.moves)
  )
  const movedRovers = rovers.map(rover => rover.executeCommands(plateau))
  console.log(movedRovers)
  const result = movedRovers.map(rover => rover.currentLocation())
  return result.join('\n')
}

module.exports = mission
