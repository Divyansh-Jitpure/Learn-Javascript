// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  


// const p = {
//     fName: "D J",
//     age: 22,
//     isStudent: false,
//     hobbies: ['gaming', 'cocking', 'piano'],
//     address: {
//         street: 'Multai Road',
//         area: 'Vikas Nagar',
//         city: 'Athner'
//     }
// }

// for (const property in p.address) {
//     console.log(p.address[property]);
// }

// console.log(p.fName);
// console.log(p.age);
// console.log(p.isStudent ? 'Yes' : 'No');
// console.log(p.hobbies[2]);
// console.log(p.address.street);
// console.log(p.address.city);



class Person {
    constructor(name, age, ...address) {
        this.name = name
        this.age = age
        this.address = new Address(...address)
    }
}

class Address {
    constructor(street, area, city) {
        this.street = street
        this.area = area
        this.city = city

    }
}


const p1 = new Person("DJ", 22, 'Multai Road', 'Vikas Nagar', 'Athner')
const p2 = new Person("PJ", 23, 'Betul Road', 'Bhagvati Nagar', 'Athner')
const p3 = new Person("MB", 23, 'Bhaisdehi Road', 'Ram Mohalla', 'Athner')

console.log(p1.address.street);
console.log(p1.address.area);
console.log(p1.address.city);

console.log(p2.address.street);
console.log(p2.address.area);
console.log(p2.address.city);

console.log(p3.address.street);
console.log(p3.address.area);
console.log(p3.address.city);