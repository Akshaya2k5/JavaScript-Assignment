console.log(mysteryVariable); // ReferenceError

let mysteryVariable = 10;
console.log(mysteryVariable); // 10

function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable); // ReferenceError
  let mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable); // 20
}

revealMystery();
console.log("After revealMystery:", mysteryVariable); // 10
