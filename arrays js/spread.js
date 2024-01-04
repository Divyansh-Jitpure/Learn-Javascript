// spread operator - ... allows an iterable such as an array or string to be expanded into seperate elements(unpack the elements)


// Array
// let number = [1, 2, 3, 4, 5]
// let maximum = Math.max(...number)
// let minimum = Math.min(...number)

// console.log(minimum);

// let username = "Divyansh Jit"
// let letters = [...username].join("-")

// console.log(letters);


let fruits = ['apple', 'orange', 'banana']
let veggies = ['carrots', 'celery', 'potatoes']

// let newFruits = [...fruits]
let foods = [...fruits, ...veggies, "eggs", "milk"]
console.log(foods); 