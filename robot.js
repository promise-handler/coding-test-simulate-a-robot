const DIRECTIONS = [
  { name: 'NORTH', l: 'WEST', r: 'EAST', val: 1, axis: 'y' },
  { name: 'EAST', l: 'NORTH', r: 'SOUTH', val: 1, axis: 'x' },
  { name: 'SOUTH', l: 'EAST', r: 'WEST', val: -1, axis: 'y' },
  { name: 'WEST', l: 'SOUTH', r: 'NORTH', val: -1, axis: 'x' },
]
class Robot {
  static execute(commandString) {
    console.log(`Started with: ${commandString}`)

    const [x, y, startingDirection, commands] = commandString.split(' ')
    const startingPoint = { x, y }
    const commandsArr = commands.split('')

    let point = startingPoint
    let direction = DIRECTIONS.find((item) => item.name === startingDirection)

    commandsArr.forEach((command) => {
      if (command === 'A') {
        point[direction.axis] = Number(point[direction.axis]) + Number(direction.val)
        return
      }

      const newDirection = DIRECTIONS.find(
        (item) => item.name === direction[command.toLowerCase()]
      )

      direction = newDirection
    })

    console.log(`${point.x} ${point.y} ${direction.name}`)
  }
}

module.exports = { execute: Robot.execute }
