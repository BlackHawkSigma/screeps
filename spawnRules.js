const simpleConfig = [WORK, CARRY, MOVE, MOVE]
const minHarvesters = 2
const minUpgraders = 3
const minBuilders = 1

const rules = {
  check (spawnName) {
    const harvesters = _.filter(Game.creeps, c => c.memory.role === 'harvester')
    const upgraders = _.filter(Game.creeps, c => c.memory.role === 'upgrader')
    const builders = _.filter(Game.creeps, c => c.memory.role === 'builder')

    if (harvesters.length < minHarvesters) {
      Game.spawns[spawnName].spawnCreep(simpleConfig, `Harvester${Game.time}`, {
        memory: {role: 'harvester'}
      })
    } else if (upgraders.length < minUpgraders) {
      Game.spawns[spawnName].spawnCreep(simpleConfig, `Upgrader${Game.time}`, {
        memory: {role: 'upgrader'}
      })
    } else if (builders.length < minBuilders) {
      Game.spawns[spawnName].spawnCreep(simpleConfig, `Builder${Game.time}`, {
        memory: {role: 'builder'}
      })
    }

    // Show info
    if (Game.spawns[spawnName].spawning) {
      let spawningCreep = Game.creeps[Game.spawns[spawnName].spawning.name]
      Game.spawns[spawnName].room.visual.text(
        '🛠️' + spawningCreep.memory.role,
        Game.spawns[spawnName].pos.x + 1,
        Game.spawns[spawnName].pos.y,
        {align: 'left', opacity: 0.8})
    }
  }
}

module.exports = rules
