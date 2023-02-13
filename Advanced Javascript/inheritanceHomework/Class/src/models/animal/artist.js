import Human from "../human.js";

export default class Artist extends Human {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.canDraw = true;
    this.canPaint = true;
  }

  paint() {
    alert(`${this.name} picked up the painting brush`);
  }
}
