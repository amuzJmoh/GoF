const ImmutableBuffer = require('./immutableBuffer');

const hello = 'Hello!';
const immutable = new ImmutableBuffer(hello.length, ({ write }) => {
  write(hello);
});

console.log(String.fromCharCode(immutable.readInt8(6)));
