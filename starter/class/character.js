class Character {

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name=name;
    this.description=description;
    this.currentRoom=currentRoom;
    this.items=[];
    this.health=100;
    this.strength=10;

  }

  applyDamage(amount) {
    // Fill this in
    this.health=this.health-amount;
  }

  die() {
    // Fill this in
    this.items.splice(0,this.items.length);
    this.currentRoom=null;
  }

}

module.exports = {
  Character,
};
