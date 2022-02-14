module.exports = function patchToSafeCalculator(calculator) {
  const divideOrig = calculator.divide;
  calculator.divide = () => {
    const divisor = calculator.peekValue();
    if (divisor === 0) {
      throw Error('Division by 0');
    }

    return divideOrig.apply(calculator);
  };

  return calculator;
};
