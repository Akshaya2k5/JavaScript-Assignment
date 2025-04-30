//3
function sumAll(...numbers) {
  return numbers.reduce((sum, current) => sum + current, 0);
}

console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(5, 10, 15, 20)); // Output: 50


//4
function processArguments(primaryFunction, ...args) {
  return primaryFunction(...args);
}

function multiply(a, b) {
  return a * b;
}

console.log(processArguments(multiply, 3, 4)); // Output: 12
