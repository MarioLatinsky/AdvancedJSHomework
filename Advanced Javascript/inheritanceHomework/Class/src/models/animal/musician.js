import Human from "../human.js";

export default class Musician extends Human {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.playsMusic = true;
    this.hasLongHair = true;
    this.hairColor = "Grey";
  }
}
