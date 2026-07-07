// function greet(message) {
//     return message + ", " + this.name;
// }

// const person = { name: "Baccho" };
// let msg = Reflect.apply(greet, person, ["Hello"]);
// console.log(msg); // Output: Hello, Baccho


// // Without Reflect, you might write:

// const obj = { name: "Anurag" };

// console.log(obj.name);      // Anurag
// delete obj.name;            // true
// "name" in obj;              // false
// console.log(obj.name);      // undefined

// const obj = { name: "Anurag" };

// console.log(Reflect.get(obj, "name"));      // Anurag
// console.log(Reflect.has(obj, "name"));      // true
// Reflect.deleteProperty(obj, "name");            // true
// console.log(Reflect.get(obj, "name"));      // undefined
// console.log(Reflect.has(obj, "name"));      // false



// const user ={}

// Reflect.set(user, "name", "Anurag");
// console.log(Reflect.get(user, "name")); // Anurag

// const user = {
//     age: 25
// };
// console.log(Reflect.has(user, "age"));
// // true



const obj = {
    a: 1,
    b: 2
};

console.log(Reflect.ownKeys(obj));
// ["a", "b"]