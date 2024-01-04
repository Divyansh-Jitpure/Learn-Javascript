// arrow functions = a concise way to write function expressions good for simple functions that you use only once (parameters) => some code

// const hello = () => console.log("hello");

// const hello = (name, age) => {
//     console.log(`Hello ${name}`);
//     console.log(`You are ${age} years old`)
// }
// hello("DJ", 21)


// setTimeout(() => console.log("hello"), 3000)

let nums = [1, 2, 3, 4, 5, 6]

const sqrs = nums.map((e) => e = e ** 2)
const cubes = nums.map((e) => e = e ** 3)
const evens = nums.filter((e) => e % 2 === 0)
const odds = nums.filter((e) => e % 2 !== 0)
const total = nums.reduce((a, e) => a + e)


console.log(sqrs);
console.log(cubes);
console.log(evens);
console.log(total);