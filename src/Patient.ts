export default abstract class Patient {
  constructor( readonly currentWeight: number, readonly height: number, readonly age: number, readonly gender: string) {
  }
  
  abstract getBasalEnergyExpenditure (): number;
}