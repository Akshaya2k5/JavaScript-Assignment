/*
const person = {
  name: "Charlie",
  greet: function () {
    setTimeout(function () {
      console.log(`Hi, I'm ${this.name}`);
    }, 1000);
  }
};

person.greet(); // Output: Hi, I'm undefined 
*/

const person = {
  name: "Charlie",
  greet: function () {
    setTimeout(() => {
      console.log(`Hi, I'm ${this.name}`);
    }, 1000);
  }
};

person.greet(); // Output: Hi, I'm Charlie
