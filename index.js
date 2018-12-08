const { fibonacci } = require('./lib/functions/fibonacci');
const { LinkedList } = require('./lib/Lists/LinkedList');

exports.printMsg = function() {
  console.log("This is a message from the demo package");
}
module.exports = {fibonacci, LinkedList};