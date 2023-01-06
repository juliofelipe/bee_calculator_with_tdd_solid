import BEE from "../src/BEE";
import Man from "../src/Man";
import Woman from "../src/Woman";

test("Deve cadastrar um paciente e calcular seu gasto energético basal", function() {
  const bee = new BEE();
  bee.addPatient(new Man(57, 162, 45));
  const basalEnergyExpenditure = bee.getBasalEnergyExpenditure();
  expect(basalEnergyExpenditure).toBe(1356.7310000000002);
});

test("Deve cadastrar uma paciente e calcular seu gasto energético basal", function() {
  const bee = new BEE();
  bee.addPatient(new Woman(57, 162, 45));
  const basalEnergyExpenditure = bee.getBasalEnergyExpenditure();
  expect(basalEnergyExpenditure).toBe(1289.471)
});

// fonte dos dados: https://globalrph.com/medcalcs/basal-energy-expenditure-bee-equation/