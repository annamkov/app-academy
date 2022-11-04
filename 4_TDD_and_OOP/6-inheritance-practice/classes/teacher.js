const Person = require('./person');

class Teacher extends Person{
  constructor(firstName, lastName, subject, yearsOfExperience){
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers){
    let combined = teachers.reduce((accum, teacher) => {
      return accum += teacher.yearsOfExperience;
    }, 0);

    return combined;
  }

}

/*let teacher1 = new Teacher("susan", "jones", "biology", 5);
let teacher2 = new Teacher("bobby", "roberts", "math", 15);
console.log(Teacher.combinedYearsOfExperience([teacher1, teacher2]));*/

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}