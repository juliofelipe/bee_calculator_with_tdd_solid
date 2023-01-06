import Patient from "./Patient";

export default class BEE {
  patients: Patient[];

  constructor() {
    this.patients = []
  }

  addPatient(patient: Patient) {
    this.patients.push(patient);
  }

  getBasalEnergyExpenditure() {
    let basalEnergyExpediture = 0;
    for (const patient of this.patients) {
      basalEnergyExpediture = patient.getBasalEnergyExpenditure();
    }
    return basalEnergyExpediture;
  }

}