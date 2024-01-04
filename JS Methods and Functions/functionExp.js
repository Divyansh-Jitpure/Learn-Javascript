// function declaration = define a reusable block of code that perform a specific task

// function expressions = a way to define functions as values or variables

//  1. Callbacks in asynchronous operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Event Listeners


// const hello = function () {
//     console.log("hello");
// }

// hello()


// setTimeout(function () {
//     console.log("Goodbye");
// }, 3000);

const numbers = [1, 2, 3, 4, 5, 6];
const sqrs = numbers.map(function (e) {
    return Math.pow(e, 2)
})

const cubes = numbers.map(function (e) {
    return Math.pow(e, 3)
})

const evenNums = numbers.filter(function (e) {
    return e % 2 === 0
})

const oddNums = numbers.filter(function (e) {
    return e % 2 !== 0
})

const total = numbers.reduce(function (a, e) {
    return a + e
})

console.log(sqrs);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);
