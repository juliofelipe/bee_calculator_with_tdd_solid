"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var BEE_exports = {};
__export(BEE_exports, {
  default: () => BEE
});
module.exports = __toCommonJS(BEE_exports);
class BEE {
  constructor() {
    this.patients = [];
  }
  addPatient(patient) {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=BEE.js.map
