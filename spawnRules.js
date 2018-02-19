const harvesterConfig = [WORK, CARRY, MOVE, MOVE]
const minHarvesters = 4


const rules = {
  check (spawnName) {
    const harvesters = _.filter(Game.creeps, c => c.memory.role === 'harvester')

    if (harvesters.lenght < minHarvesters) {
      Game.spawns[spawnName].spawnCreep(harvesterConfig, `Harvester${Game.time}`, {
        memory: {role: 'harvester'}
      })
    }

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
