const roleHarvester = require('role.harvester')
const roleBuilder = require('role.builder')
const roleUpgrader = require('roleUpgrader')

const spawnRules = require('spawnRules')

module.exports.loop = function () {
  for (let name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name]
      console.log('Clearing non-existing creep memory:', name)
    }
  }

  spawnRules.check('Spawn1')

  for (let name in Game.creeps) {
    let creep = Game.creeps[name]
    if (creep.memory.role === 'harvester') {
      roleHarvester.run(creep)
    } else if (creep.memory.role === 'builder') {
      roleBuilder.run(creep)
    } else if (creep.memory.role === 'upgrader') {
      roleUpgrader.run(creep, 'Spawn1')
    }
  }
}
