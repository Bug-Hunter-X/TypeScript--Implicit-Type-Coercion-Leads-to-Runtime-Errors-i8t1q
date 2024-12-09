function combine(a: number, b: number): number {
  return a + b;
}

function combineStrict(a: number, b: number): number {
  // Explicit check to throw error at compile time if unexpected type is passed
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result1 = combine('hello', 5); // Still compiles but will result in NaN at runtime
console.log(result1); // NaN

const result2 = combineStrict(10, 20); //Correct usage
console.log(result2); //30

const result3 = combineStrict('hello',5); //Throws an error at compile time
console.log(result3); //Error