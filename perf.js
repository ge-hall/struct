// @flow
const {fibonacci, LinkedList, printMsg } = require('./index');

//import ll from './src/Lists/LinkedList';

console.log(fibonacci(5));
console.log(fibonacci(15));

const list = new LinkedList();

for( let i = 0; i<10000; i++)
list.insert(i);

//console.log(list.toString());
