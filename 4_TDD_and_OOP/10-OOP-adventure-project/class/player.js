const { Room } = require('./room');
const { Item } = require('./item');
const { Food } = require('./food');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
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

        let room = this.currentRoom;
        let item = room.getItemByName(itemName); //searches room for item by it's name (returns an object)

        //add item from player's inventory
        this.items.push(item);
        //remove item from current room
        let targetIndex = room.items.indexOf(item);
        room.items.splice(targetIndex, 1);
    }

    dropItem(itemName) {

        let room = this.currentRoom;
        let item = this.getItemByName(itemName); //searches players inventory for item by it's name (returns an object)

        //drop item into room
        room.items.push(item);
        //remove item from player's inventory
        let targetIndex = this.items.indexOf(item);
        this.items.splice(targetIndex, 1);
    }

    eatItem(itemName) {
        let item = this.getItemByName(itemName);
        if(item instanceof Food){
            let targetIndex = this.items.indexOf(item);
            this.items.splice(targetIndex, 1); //remove food from player's inventory
        }
    }

    getItemByName(name) {
        //items is a list of objects.
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].name === name){
                return this.items[i];
            }
        }
    }
}

let item = new Item("rock", "just a simple rock");
let room = new Room("Test Room", "A test room");
let player = new Player("player", room);

room.items.push(item);
console.log(room.items.length); //expected: 1
console.log(player.items.length);  //expected: 0

player.takeItem("rock");

console.log(room.items.length); //expected: 0
console.log(player.items.length); //expected: 1

console.log(player.items);
console.log(player.getItemByName("rock"));


module.exports = {
  Player,
};
