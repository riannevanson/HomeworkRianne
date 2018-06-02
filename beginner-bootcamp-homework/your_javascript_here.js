// Variables
var hero = {
  name : 'Sijmen',
  heroic : true,
  inventory : ['weapons','superpower','food'],
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


function dealDamage(){

}


function equipWeapon(){

}


function doBattle(){

}

// UI
