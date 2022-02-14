module.exports = class SafeCalculator {
  constructor(calculator) {
    this.calculator = calculator;
  }

  divide() {
    const divisor = this.calculator.peekValue();
    if (divisor === 0) {
      throw Error('Division by 0');
    }

    return this.calculator.divide();
  }

  putValue(value) {
    return this.calculator.putValue(value);
  }

  getValue() {
    return this.calculator.getvalue();
  }

  peekValue() {
    return this.calculator.peekValue();
  }

  clear() {
    return this.calculator.clear();
  }

  multiply() {
    return this.calculator.multiply();
  }
};
