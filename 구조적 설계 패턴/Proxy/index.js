const StackCalculator = require('./StackCalculator');
const SafeCalculator = require('./SafeCalculator');
const createSafeCalculator = require('./ProxyFactory');
const patchToSafeCalculator = require('./patchToSafeCalculator');
const { safeCalculatorHandler } = require('./Object_Proxy');

const calculator = new StackCalculator();
// const safeCalculator = new SafeCalculator(calculator);
// const safeCalculator = createSafeCalculator(calculator);
// const safeCalculator = patchToSafeCalculator(calculator);
const safeCalculator = new Proxy(calculator, safeCalculatorHandler);

calculator.putValue(3);
calculator.putValue(2);
console.log(calculator.multiply());
calculator.putValue(2);
console.log(calculator.multiply());

calculator.putValue(0);
console.log(calculator.divide());

safeCalculator.clear();
safeCalculator.putValue(4);
safeCalculator.putValue(0);
console.log(safeCalculator.divide());
