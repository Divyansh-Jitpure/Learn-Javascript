// filter() = creates a new array by filtering out elements with a callback


// ----------- EXAMPLE 1 -----------

// let nums = [1, 2, 3, 4, 5, 6, 7]
// let evenNums = nums.filter(isEven)
// let oddNums = nums.filter(isOdd)

// console.log(evenNums);
// console.log(oddNums);

// function isEven(e) {
//     return e % 2 === 0
// }
// function isOdd(e) {
//     return e % 2 !== 0
// }


// ----------- EXAMPLE 2 -----------

// const ages = [16, 17, 18, 18, 19, 20, 60]
// const adults = ages.filter(isAdult)
// const children = ages.filter(isChild)

// console.log(adults);
// console.log(children);

// function isAdult(e) {
//     return e >= 18
// }

// function isChild(e) {
//     return e < 18
// }


// ----------- EXAMPLE 3 -----------

const words = ['apple', 'orange', 'kiwi', 'banana', 'pomegranate', 'coconut',];
const shortWords = words.filter(getShortWords)
const longWords = words.filter(getLongWords)

console.log(shortWords);
console.log(longWords);

function getShortWords(e) {
    return e.length <= 6
}
function getLongWords(e) {
    return e.length > 6
}