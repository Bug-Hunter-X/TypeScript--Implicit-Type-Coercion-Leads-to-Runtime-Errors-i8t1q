function combine(a: number, b: number): number {
  return a + b;
}

const result = combine('hello', 5); // Type error is not thrown at compile time
console.log(result); // Outputs NaN