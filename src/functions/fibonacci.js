'use strict'
/**
 * Funcion to return fibonnacci for given number
 * @param {*} n the input to fibonacci 
 */
export default function fibonacci(n:number) {
  //console.log(`n = ${n}`);
  if (n ===0)
    return 0;
  else if ( n==1 )
  return 1;
  let result = fibonacci(n - 1) + fibonacci(n - 2);
  //console.log(`n = ${result}`);
  return result;
}