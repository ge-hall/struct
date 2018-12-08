const { fibonacci } = require('./src/functions/fibonacci');
const { LinkedList } = require('./src/Lists/LinkedList');

exports.printMsg = function() {
  console.log("This is a message from the demo package");
}
module.exports = {fibonacci, LinkedList};