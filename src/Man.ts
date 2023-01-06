import Patient from "./Patient";

export default class Man extends Patient {

  constructor(currentWeight: number, height: number, age: number) {
    super(currentWeight, height, age, "Man");
  }

  getBasalEnergyExpenditure(): number {
    return 66.47 + (13.75 * this.currentWeight) + (5.003 * this.height) - (6.755 * this.age);
  }
}