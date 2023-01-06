"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_BEE = __toESM(require("../src/BEE"));
var import_Man = __toESM(require("../src/Man"));
var import_Woman = __toESM(require("../src/Woman"));
test("Deve cadastrar um paciente e calcular seu gasto energ\xE9tico basal", function() {
  const bee = new import_BEE.default();
  bee.addPatient(new import_Man.default(57, 162, 45));
  const basalEnergyExpenditure = bee.getBasalEnergyExpenditure();
  expect(basalEnergyExpenditure).toBe(1356.7310000000002);
});
test("Deve cadastrar uma paciente e calcular seu gasto energ\xE9tico basal", function() {
  const bee = new import_BEE.default();
  bee.addPatient(new import_Woman.default(57, 162, 45));
  const basalEnergyExpenditure = bee.getBasalEnergyExpenditure();
  expect(basalEnergyExpenditure).toBe(1289.471);
});
//# sourceMappingURL=BEE.test.js.map
