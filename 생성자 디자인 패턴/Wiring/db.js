const sqlite3 = require('sqlite3');

module.exports = function createDb(dbFile) {
  return new sqlite3.Database(dbFile);
};
