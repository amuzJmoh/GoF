'use strict';

const createProfiler = require('./profiler');
const { argv } = require('process');
require('dotenv').config();

function getAllFactors(intNumber) {
  const profiler = createProfiler(`Finding all factors of ${intNumber}`);

  profiler.start();
  const factors = [];
  for (let factor = 2; factor <= intNumber; factor++) {
    while (intNumber % factor === 0) {
      factors.push(factor);
      intNumber = intNumber / factor;
    }
  }
  profiler.end();

  return factors;
}

const myNumber = process.argv[2];

console.log(process.env.NODE_ENV);
const myFactors = getAllFactors(myNumber);
console.log(`Factors of ${myNumber} are: `, myFactors);
