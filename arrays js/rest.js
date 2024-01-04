// rest parameters = (...rest) allow a function work with a variable number of arguments by building them into an array
// Spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

// function openFridge(...foods) {
//     console.log(...foods);
// }
// function getFood(...foods) {
//     return foods;
// }


// const food1 = 'pizza'
// const food2 = 'hamburger'
// const food3 = 'hotdog'
// const food4 = 'sushi'
// const food5 = 'ramen'

// openFridge(food1, food2, food3, food4, food5)
// const foods = getFood(food1, food2, food3, food4, food5)

// console.log(foods);



// a function to take any number of arguments as parameters with ...rest parameters and get their sum
// function sum(...numbers) {
//     let result = 0

//     for (let number of numbers) {
//         result += number
//     }
//     return result
// }

// const total = sum(1, 2, 3, 4, 5)

// console.log(`your total is $${total}`);



// a function to take any number of arguments as parameters with ...rest parameters and get their average
// function getAvg(...numbers) {
//     let result = 0

//     for (let number of numbers) {
//         result += number
//     }
//     return result / numbers.length
// }

// const total = getAvg(75, 100, 85, 90, 50)

// console.log(`your average is ${total}`);



function combineStrings(...strings) {
    return strings.join(' ')
}

const fullName = combineStrings("Moneky", "D", "Luffy")

console.log(`Your full name is ${fullName}`);