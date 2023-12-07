function greet(name) {
  if (name) {
    console.log("Hello, " + name + "!");
  } else {
    console.log("Hello, world!");
  }
}

let myName = "John";
greet(myName);

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Sum of numbers:", sum);
