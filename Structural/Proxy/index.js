const StackCalculator = require('./StackCalculator');
const SafeCalculator = require('./SafeCalculator');
const createSafeCalculator = require('./ProxyFactory');
const patchToSafeCalculator = require('./patchToSafeCalculator');
const { safeCalculatorHandler } = require('./Object_Proxy');
const { createWriteStream } = require('fs');
const createLoggingWritable = require('./logging-writable');

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

// calculator.putValue(0);
// console.log(calculator.divide());

// safeCalculator.clear();
// safeCalculator.putValue(4);
// safeCalculator.putValue(0);
// console.log(safeCalculator.divide());

//Logging
const writable = createWriteStream('text.txt');
const writableProxy = createLoggingWritable(writable);

writableProxy.write('First chunk');
writableProxy.write('Second chunk');
writable.write('This is not logged');
writableProxy.end();

//invoice app
const createObservable = require('./create-observable');
function calculateTotal(invoice) {
  return invoice.subtotal - invoice.discount + invoice.tax;
}
const invoice = {
  subtotal: 100,
  discount: 10,
  tax: 20,
};
let total = calculateTotal(invoice);
console.log(`Starting total: ${total}`);

const obsInvoice = createObservable(invoice, ({ prop, prev, curr }) => {
  total = calculateTotal(invoice);
  console.log(`TOTAL: ${total} (${prop} changed: ${prev} -> ${curr})`);
});

obsInvoice.subtotal = 200;
obsInvoice.discount = 20;
obsInvoice.discount = 20;
obsInvoice.tax = 30;

console.log(`Final total: ${total}`);
