// Variables
var hero = {
  name : 'Sijmen',
  heroic : true,
  inventory : ['pistol','handbomb','pineapple','love'],
  health : 8,
    weapon : {
      type: 'string',
      damage: 5,
    },
}

var badguy = {
  name : 'Rianne',
  heroic : true,
  inventory : ['pistol','handbomb','pineapple','love'],
  health : 10,
    weapon : {
      type: 'string',
      damage: 2,
    },
}

// Game logic
var restEvent = document.getElementById('buttonRest');
restEvent.onclick = function(event) {

  function rest(creature){
    creature.health = 10
    return creature
  }
    // console.log(rest(badguy));
}

function rest(creature){
  creature.health = 10
  return creature
}


// console.log(rest(hero))

function pickUpItem(creature, item){
creature.inventory.push(item)
return creature
}
// console.log(pickUpItem(hero, {type: "gun", damage: 2}))


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
console.log(equipWeapon(hero, 4))


function doBattle(heroicCreature, creature){
  if (heroicCreature !== "heroic") {
    return null
  }
  if (heroicCreature.health > 0 && creature.health > 0){
  dealDamage(heroicCreature, creature)

    if(heroicCreature.health > 0 && creature.health > 0){
      doBattle(heroicCreature, creature)
    } else if(creature.health > 0){
    heroicCreature = 'heroic'
    return heroicCreature
  console.log(heroicCreature)
    } else if(heroicCreature.health > 0){
    hero = 'heroic'
    return hero
    console.log(hero)
    }

  } else if(creature.health > 0){
  heroicCreature = 'heroic'
  doBattle(heroicCreature, creature)
  } else if(heroicCreature.health > 0){
  hero = 'heroic'
  doBattle(heroicCreature, creature)
  }
}
// console.log(doBattle(badguy,hero))












console.log(doBattle(hero, hero))

// UI
