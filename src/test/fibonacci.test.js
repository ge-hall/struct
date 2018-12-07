import fib from '../functions/fibonacci'
describe('fibonacci function initial sequence', ()=>{
test('fibonacci(0)', () => 
expect(fib(0)).toBe(0));

test('fibonacci(1)', () => 
expect(fib(1)).toBe(1));

test('fibonacci(2)', () => 
expect(fib(2)).toBe(1));
test('fibonacci(3)', () => 
expect(fib(3)).toBe(2));
test('fibonacci(4)', () => 
expect(fib(4)).toBe(3));
test('fibonacci(5)', () => 
expect(fib(5)).toBe(5));
test('fibonacci(6)', () => 
expect(fib(6)).toBe(8));
});