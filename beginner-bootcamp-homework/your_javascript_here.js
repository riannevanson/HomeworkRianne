// Variables
var hero = {
  name : 'Sijmen',
  heroic : true,
  inventory : [{type: 'pistol', damage: 2},{type: 'handbomb',damage: 6},{type:'pineapple', damage: 1},{type: 'love', damage: 8}],
  health : 8,
    weapon : {
      type: 'knife',
      damage: 5,
    },
}

var badguy = {
  name : 'Rianne',
  heroic : true,
  inventory : ['pistol','knife','pineapple','love'],
  health : 5,
    weapon : {
      type: 'handbomb',
      damage: 2,
    },
}

// Game logic
var restEvent = document.getElementById('buttonRest');
restEvent.onclick = function(restEvent) {

  function rest(creature){
    creature.health = 10
    return creature
  }
    console.log(rest(hero));
}

// console.log(rest(hero))

var pickUpEvent = document.getElementById('buttonWeapon');
pickUpEvent.onclick = function(pickUpEvent) {

  function pickUpItem(creature, item){
  creature.inventory.push(item)
  return creature
  }
  console.log(pickUpItem(hero, {type: "gun", damage: 2}))
}



function dealDamage(attacker, defender){

defender.health = defender.health - attacker.weapon.damage
return defender
}

// console.log(dealDamage(hero,hero))


function equipWeapon(creature, index){
// creature.inventory[index]
creature.weapon = creature.inventory[index]
creature.inventory.splice(index, 1)
return creature
}
// console.log(equipWeapon(hero, 4))

var battleEvent = document.getElementById('buttonEnemy');
battleEvent.onclick = function(battleEvent) {

  function doBattle(heroicCreature, creature){
    if (heroicCreature !== "heroic") {
      return null
    }
    // if (heroicCreature.health > 0 && creature.health > 0){
    // dealDamage(heroicCreature, creature)
    //
    //   if(heroicCreature.health > 0 && creature.health > 0){
    //     doBattle(heroicCreature, creature)
    //   } else if(creature.health > 0){
    //   heroicCreature = 'heroic'
    //   return heroicCreature
    // console.log(heroicCreature)
    //   } else if(heroicCreature.health > 0){
    //   hero = 'heroic'
    //   return hero
    //   console.log(hero)
    //   }
    //
    // } else if(creature.health > 0){
    // heroicCreature = 'heroic'
    // doBattle(heroicCreature, creature)
    // } else if(heroicCreature.health > 0){
    // hero = 'heroic'
    // doBattle(heroicCreature, creature)
    // }
  }
}
// console.log(doBattle(badguy,hero))












console.log(doBattle(hero, hero))

// UI
