class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce(){
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople(people) { //using the ...rest operator would capture the passed parameters as an array of values
    if(!Array.isArray(people)){
      throw Error("introducePeople only takes an array as an argument.");
    }

    people.forEach(person => {
      if(!(person instanceof Person)){
        throw Error("All items in array must be Person class instances.");
      }
    });

    people.forEach(person => {
      person.introduce();
    });
  }
}

//let badInput = "bad input";
//Person.introducePeople(badInput);
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}