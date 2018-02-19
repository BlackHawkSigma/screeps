const roleHarvester = require('role.harvester')
const roleBuilder = require('role.builder')
const spawnRules = require('spawnRules')

module.exports.loop = function () {

  spawnRules.check('Spawn1')

  for (let name in Game.creeps) {
    let creep = Game.creeps[name]
    if (creep.memory.role === 'harvester') {
      roleHarvester.run(creep)
    } else if (creep.memory.role === 'builder') {
      roleBuilder.run(creep)
    }
  }
}
