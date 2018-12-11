const parsePlateauBoundary = boundary => ({
  x: parseInt(boundary.slice(0, 1)),
  y: parseInt(boundary.slice(2, 3))
})

const parseCoordinates = location => ({
  x: parseInt(location.slice(0, 1)),
  y: parseInt(location.slice(2, 3))
})

const parseOrientation = location => location.slice(4, 5)

const parseRoverCommands = command => {
  const splitCommand = command.split('\n')
  const commands = []
  for (let i = 1; i < splitCommand.length; i += 2) {
    const location = splitCommand[i]
    const moves = splitCommand[i + 1]
    const command = { location, moves }
    console.log(i, command)
    commands.push(command)
  }

  return commands
}

module.exports = {
  parsePlateauBoundary,
  parseCoordinates,
  parseOrientation,
  parseRoverCommands
}
