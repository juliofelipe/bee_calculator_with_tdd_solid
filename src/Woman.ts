import Patient from "./Patient";

export default class Woman extends Patient {

  constructor(currentWeight: number, height: number, age: number) {
    super(currentWeight, height, age, "Woman");
  }

  getBasalEnergyExpenditure(): number {
    return 655.1 + (9.563 * this.currentWeight) + (1.850 * this.height) - (4.676 * this.age);
  }
}