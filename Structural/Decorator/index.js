// const StackCalculator = require('../Proxy/StackCalculator');
// const EnhancedCalculator = require('./enhancedCalculator');
// const patchCalculator = require('./patchCalculator');
// const enhancedCalculatorHandler = require('./decoratorProxy');

// const calculator = new StackCalculator();
// // const enhancedCalculator = new EnhancedCalculator(calculator);
// //augmentation
// // const enhancedCalculator = patchCalculator(calculator);
// //Proxy
// const enhancedCalculator = new Proxy(calculator, enhancedCalculatorHandler);

// enhancedCalculator.putValue(4);
// enhancedCalculator.putValue(3);
// console.log(enhancedCalculator.add());
// enhancedCalculator.putValue(2);
// console.log(enhancedCalculator.multiply());

//levelSubScribe
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import level from 'level';
import { levelSubscribe } from './levelsubscribe.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const dbPath = join(__dirname, 'db');
const db = level(dbPath, { valueEncoding: 'json' });
levelSubscribe(db);

db.subscribe({ doctype: 'tweet', language: 'en' }, (k, val) => console.log(val));
db.put('1', {
  doctype: 'tweet',
  text: 'Hi',
  language: 'en',
});
db.put('2', {
  doctype: 'company',
  name: 'ACME Co.',
});
