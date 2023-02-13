import Human from "../human.js";

export default class Worker extends Human {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.worksFullTime = true;
    this.workingHours = 8;
    this.salaryInEuros = 400;
  }

  workWorker() {
    this.picksUpTheHammer = true;
    console.log(`The Worker ${this.name} started working. `);
  }
}
