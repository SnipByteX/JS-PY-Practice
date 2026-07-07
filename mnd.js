// function myFunc(theObject) {
//   theObject.make = "Toyota";
// }

// const myCar = {
//   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };

// console.log(myCar.make); // "Honda"
// myFunc(myCar);
// console.log(myCar.make); // "Toyota"

// function fact(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * fact(n -1)
// }
// console.log('%cmnd.js:21 fact 5', 'color: #007acc;', fact(5));

// console.log(square(5))
// function square(n) {
//   return n * n;
// }


// Print Hello Without using any loop.
function printHello(n) {
  if (n === 0) return;
  console.log("Hello");
  printHello(n - 1);
}
printHello(10);

Array(10).fill().forEach(() => console.log("Hello"));

console.log("Hello\n".repeat(10));





function printHello(n, current = 1) {
  if (current >= n) return;
  console.log(`Hello ${current}`); printHello(n, current + 1);
}
printHello(10);