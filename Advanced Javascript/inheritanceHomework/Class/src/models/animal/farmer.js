import Human from "../human.js";

export default class Farmer extends Human {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.ownsAlotOfAnimals = true;
    this.hasBoots = true;
    this.ownsLand = true;
    this.hasApickupTruck = true;
    this.hasEndlessSourceOfFood = true;
    this.extremelyHighTestosteroneLevels = true;
  }

  pickUpAxe() {
    alert(`${this.name} picked up an axe to cut some wood `);
  }
}
