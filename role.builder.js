const roleBuilder = {

  /** @param {Creep} creep */
  run (creep) {
    if (creep.memory.building && creep.carry.energy === 0) {
      creep.memory.building = false
      creep.say('harvest')
    }
    if (!creep.memory.building && creep.carry.energy === creep.carryCapacity) {
      let closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: (structure) => structure.hits < structure.hitsMax && structure.structureType !== STRUCTURE_WALL
      })
      creep.memory.building = true
      creep.say('build')
    }

    if(closestDamagedStructure) {
      if (creep.repair(closestDamagedStructure) == ERR_NOT_IN_RANGE) {
        creep.moveTo(closestDamagedStructure, {visualizePathStyle: {stroke: '#00ff00'}})
      }
    }


    if (creep.memory.building) {
      let target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES)
      if (target) {
        if (creep.build(target) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}})
        }
      }
    } else {
      let sources = creep.room.find(FIND_SOURCES)
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}})
      }
    }
  }
}

module.exports = roleBuilder
