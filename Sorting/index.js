// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

// let fruits = ['apple', 'orange', 'banana', 'coconut', 'pineapple']
// fruits.sort()
// console.log(fruits);


// let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// numbers.sort((a, b) => a - b)
// numbers.sort((a, b) => b - a) //reverse order

// console.log(numbers);

const people = [
    { name: "DJ", age: 22, gpa: 3.0 },
    { name: "PJ", age: 23, gpa: 1.5 },
    { name: "HP", age: 24, gpa: 2.5 },
    { name: "AY", age: 21, gpa: 4.0 }
]

const byAge = people.sort((a, b) => a.age - b.age)
console.log(byAge);

const byGpa = people.sort((a, b) => a.gpa - b.gpa)
console.log(byGpa);