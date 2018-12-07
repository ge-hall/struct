'use strict'

export default function fibonacci(n) {
  //console.log(`n = ${n}`);
  if (n ===0)
    return 0;
  else if ( n==1 )
  return 1;
  let result = fibonacci(n - 1) + fibonacci(n - 2);
  //console.log(`n = ${result}`);
  return result;
}