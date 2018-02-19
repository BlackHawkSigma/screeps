const roleUpgrader = {

  /** @param {Creep} creep **/
  run (creep, spawn) {

    // switch to harvest if energy empty
    if (creep.memory.upgrading && creep.carry.energy === 0) {
      creep.memory.upgrading = false
      creep.say('🔄 harvest')

    // Back to work
    } else if ( !creep.memory.upgrading && creep.carry.energy === creep.carryCapacity) {
        creep.memory.upgrading = true
        creep.say('⚡ upgrade')
    }

    // Upgrade Controller
    if (creep.memory.upgrading) {
      if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#ffffff' }})
      }
    // And refill
    } else {
      let sources = creep.room.find(FIND_SOURCES)

      if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}})
      }
    }
  }
}

module.exports = roleUpgrader
