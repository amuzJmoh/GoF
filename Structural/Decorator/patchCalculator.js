module.exports = function patchCalculator(calculator) {
  calculator.add = function () {
    const addend2 = calculator.getValue();
    const addend1 = calculator.getValue();
    const result = addend1 + addend2;
    calculator.putValue(result);
    return result;
  };

  const divideOrig = calculator.divideOrig;
  calculator.divide = () => {
    const divisor = calculator.peekValue();
    if (divisor === 0) {
      throw Error('Division by 0');
    }
    return divideOrig.apply(calculator);
  };
  return calculator;
};
