const animal = {
    eats:true
}

const dog = Object.create(animal);
dog.barks = false;

console.log(dog.eats); // Output: true
console.log(dog.barks); // Output: false