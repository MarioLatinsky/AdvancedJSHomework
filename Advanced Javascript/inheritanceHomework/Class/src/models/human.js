import Mammal from "./mammal.js";

export default class Human extends Mammal {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.numberOfLegs = 2;
    this.isHighlyInteligent = true;
    this.couldBuildAsociety = true;
    this.couldDriveAcar = true;
  }

  talkToSomeone() {
    console.log(
      `The person by the name of ${this.name} is trying to communicate with another human`
    );
  }

  speak() {
    console.log(`${this.name}: Greetings comrade`);
  }
}
