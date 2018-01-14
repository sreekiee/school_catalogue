class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(studentNumber){
    if (typeof studentNumber === 'number'){
      this._numberOfStudents = studentNumber;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number');
    }
  }

  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students, typically between the ages of ${this.level}.`);
  }

  static pickSubstituteTeacher(substituteTeachers){
    let rand = Math.floor(Math.random() * (substituteTeachers.length - 1));
    return substituteTeachers[rand];
  }

}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents){
    super(name, 'middle', numberOfStudents);
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams(){
    console.log(this._sportsTeams);
  }
}

// testing

let lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

let alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;
