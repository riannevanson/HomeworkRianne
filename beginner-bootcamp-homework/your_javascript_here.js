// Variables
var hero = {
  name : 'Sijmen',
  heroic : true,
  inventory : ['weapons','superpower','food','love'],
  health : 8,
    weapon : {
      type: 'string',
      damage: 5,
    },
}

// Game logic

function rest(creature){
  creature.health = 10
  return creature
}

// console.log(rest(hero))

function pickUpItem(creature, item){
creature.inventory.push(item)
return creature
}
// console.log(pickUpItem(hero, "knife"))


function dealDamage(attacker, defender){

defender.health = defender.health - attacker.weapon.damage
return defender
}

// console.log(dealDamage(hero,hero))


function equipWeapon(creature, index){
// creature.weapon = creature.inventory[index]
// console.log(creature.inventory[index])
// creature.inventory = creature.inventory.splice([index], 1)
// console.log(creature.inventory.splice([index], 1))
// creature.inventory = creature.inventory - creature.inventory[index]
// return creature
}
// console.log(equipWeapon(hero, 2))


function doBattle(heroicCreature, creature){

  if (heroicCreature !== heroic) {
    return null
  }
  //
  // else if (heroicCreature > 0 && creature > 0){
  //   dealDamage(heroicCreature, creature)
  //   if (creature !== 0){
  //     dealDamage(creature, heroicCreature)
  //   }


  // }









  // if (heroicCreature !== heroic) {
  //   return null
  // }
  // else {
  //
  //   if (heroicCreature > 0 && creature > 0){
  // //`heroicCreature` deals damage to `creature` first. If `creature` survives it deals damage to `heroicCreature`.
  //     dealDamage(heroicCreature, creature)
  //      if (creature !== 0){
  //       dealDamage(creature, heroicCreature)
  //     }
  //   }
  // }
}

console.log(doBattle(hero, hero))

// UI
