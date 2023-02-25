const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
    this.items=[];
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    // Fill this in
    let item=this.currentRoom.getItemByName(itemName);
    this.items.push(item);
    let index;
    this.currentRoom.items.forEach(
      (element,i)=>{
        if(element.name===itemName){
          index=i;
        }
      }
    );
    this.currentRoom.items.splice(index,1);


  }

  dropItem(itemName) {

    // Fill this in
    let item=this.getItemByName(itemName);
    this.currentRoom.items.push(item);
    let index;
    this.items.forEach((element,i)=>
    {
      if(element.name===itemName){
        index=i;
      }
    }
    );
    this.items.splice(index,1);

  }

  eatItem(itemName) {

    // Fill this in
    let item=this.getItemByName(itemName);
    if(item instanceof Food){
      let index;
      this.items.forEach((element,i)=>
    {
      if(element.name===itemName){
        index=i;
      }
    }
    );
    this.items.splice(index,1);
    }
      
  }

  getItemByName(name) {

    // Fill this in
    let result;
    for(let item of this.items){
      if(item.name===name){
        result=item;
      }
    }
    return result;

  }

  hit(name) {

    // Fill this in

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
