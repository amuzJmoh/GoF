// const StackCalculator = require('./StackCalculator');

const safeCalculatorHandler = {
  get: (target, property) => {
    if (property === 'divide') {
      return function () {
        const divisor = target.peekValue();
        if (divisor === 0) {
          throw Error('Division by 0');
        }

        return target.divide();
      };
    }

    return target[property];
  },
};

// const calculator = new StackCalculator();
// const safeCalculator = new Proxy(calculator, safeCalculatorHandler);

module.exports = { safeCalculatorHandler };
