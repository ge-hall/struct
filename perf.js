// @flow
import fib from './src/functions/fibonacci';
import ll from './src/Lists/LinkedList';

console.log(fib(5));
console.log(fib(15));

const list = new ll();

for( let i = 0; i<10000; i++)
list.insert(i);

console.log(list.toString());

