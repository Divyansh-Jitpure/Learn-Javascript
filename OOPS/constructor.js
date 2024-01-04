// constructor = special method for defining the properties and methods of objects

function Car(make, model, year, color) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.drive = function () { console.log(`You drive the ${this.model}`); }
}

const car1 = new Car("Ford", "Mustang", 2024, "red")
const car2 = new Car("Tata", "Nexon", 2024, "black")
const car3 = new Car("Hyundai", "Verna", 2024, "white")

console.log(car1);
car1.drive()
console.log(car2);
car2.drive()
console.log(car3);
car3.drive()