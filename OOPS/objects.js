// object = A collection of related properties and/or methods can represent real world objects (people, products, places)
//                object = {key:value,
//                          function ()}

const person1 = {
    firstName: "Monkey D",
    lastName: "Luffy",
    age: 19,
    isPirate: true,
    isMarine: false,
    relation: () => console.log(`Grandson of ${person2.firstName + " " + person2.lastName}`)
}

const person2 = {
    firstName: "Monkey D",
    lastName: "Garp",
    age: 78,
    isPirate: false,
    isMarine: true,
    relation: () => console.log(`Grand father of ${person1.firstName + " " + person1.lastName}`)
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isMarine);
console.log(person1.isPirate);
person1.relation()

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isMarine);
console.log(person2.isPirate);
person2.relation()
