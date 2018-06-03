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

var heroStats = hero
// **********************-------functions-----------****************
function rest(creature){
  creature.health = 10
  return creature
}

function pickUpItem(creature, item){
creature.inventory.push(item)
return creature
}

function dealDamage(attacker, defender){
  defender.health = defender.health - attacker.weapon.damage
  return defender
}

function equipWeapon(creature, index){
// creature.inventory[index]
creature.weapon = creature.inventory[index]
creature.inventory.splice(index, 1)
return creature
}

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

//////////////////////////////////////////////////////////

// *************-----button events:------****************//


var restEvent = document.getElementById('buttonRest');
restEvent.onclick = function(event) {

    function rest(creature){
      creature.health = 10
      return creature
    }
  console.log(rest(hero));
}

// console.log(rest(hero))

var pickUpEvent = document.getElementById('buttonWeapon');
pickUpEvent.onclick = function(event) {

    function pickUpItem(creature, item){
    creature.inventory.push(item)
    return creature
    }
  console.log(pickUpItem(hero, {type: "gun", damage: 2}))
}

var battleEvent = document.getElementById('buttonEnemy');
battleEvent.onclick = function(event) {

  function doBattle(heroicCreature, creature){
    if (heroicCreature !== "heroic") {
      console.log('heroicCreature must play!')
      return null
    }

    if (heroicCreature.health > 0 && creature.health > 0){
    dealDamage(heroicCreature, creature)

      if(heroicCreature.health > 0 && creature.health > 0){
        doBattle(heroicCreature, creature)
      } else if(creature.health > 0){

      return heroicCreature
    console.log(heroicCreature)
      } else if(heroicCreature.health > 0){

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
console.log(doBattle(badguy,hero))

var AddEquipWeapon = document.getElementById('equipWeapon');
AddEquipWeapon.addEventListener('click', function(event) {
    // console.log('Event listener 1');
  var indexInput = prompt("What weapon number do you want?");
  // console.log(hero.inventory[indexInput])
  // console.log(indexInput)
  console.log(equipWeapon(hero, indexInput))
});


function displayStats(creature){
var heros = creature;
document.getElementById("statsBlock").innerHTML = `name: ${heros.name} <br /> health: ${heros.health} <br /> weapontype: ${heros.weapon.type} <br /> weapondamage: ${heros.weapon.damage}`;
}
// console.log(displayInventory(hero))

function displayInventory(creature){
var heros = creature;
document.getElementById("inventoryBlock").innerHTML = `Inventory: ${heros.inventory} <br /> ${heros.inventory.type} <br /> ${heros.inventory.damage}`;
}



// UI
