// main list to edit
const cars = [ "Toyota", "Honda", "Ford", "Chevrolet", "Nissan" ];
// replace first and last cars
cars[0] = "BMW";
cars[4] = "Mercedes";
// add new car to the beginning
cars.unshift("Audi");
// remove the last car
cars.pop();

// Print array to console
console.log(cars);