// this = reference to the object where THIS is used
//           (the object depends on the immediate context) 

const person1 = {
    name: "DJ",
    faveFood: "Chicken",
    sayHii: function () { console.log(`Hii I am ${this.name}`) },
    eat: function () { console.log(`${this.name} is eating ${this.faveFood}`); }
}

person1.sayHii()
person1.eat()