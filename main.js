const roleHarvester = require('role.harvester')
const roleBuilder = require('role.builder')

module.exports.loop = function () {
  for (let name in Game.creeps) {
    let creep = Game.creeps[name]
    if (creep.memory.role === 'harvester') {
      roleHarvester.run(creep)
    } else if (creep.memory.role === 'builder') {
      roleBuilder.run(creep)
    }
  }
}
