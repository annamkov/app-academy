class Dragon {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons){
    let names = dragons.map(dragon => {
      if(dragon instanceof Dragon){
        return dragon.name;
      }
    });

    return names;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}