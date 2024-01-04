// Array is a variable like structure that can hold more than 1 value

let fruits = ['apple', 'orange', 'banana', 'coconut',]

// ---->
// for (let i = 1; i < fruits.length; i += 2) {
//     console.log(fruits[i]);
// }

// <----
// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }

fruits.sort().reverse()

// for of
for (let fruit of fruits) {
    console.log(fruit);
}


// fruits.push('coconut')
// fruits.pop()
// fruits.unshift('mango')
// fruits.shift('mango')

// let numOfFruits = fruits.length
// let index = fruits.indexOf('mango')

// console.log(numOfFruits);
// console.log(index);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);


