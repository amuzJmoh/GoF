module.exports = class EnhancedCalculator {
  constructor(calculator) {
    this.calculator = calculator;
  }

  add() {
    const addend2 = this.getValue();
    const addend1 = this.getValue();

    const result = addend1 + addend2;
    this.putValue(result);
    return result;
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
    return this.calculator.getValue();
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
