// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array


// ------------ EXAMPLE 1 ------------
// const numbers = [1, 2, 3, 4, 5]
// const squares = numbers.map(square)
// const cubes = numbers.map(cube)

// console.log(squares);
// console.log(cubes);

// function square(elm) {
//     return Math.pow(elm, 2)
// }

// function cube(elm) {
//     return Math.pow(elm, 3)
// }


// ------------ EXAMPLE 2 ------------
// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);

// console.log(students);
// console.log(studentsUpper);
// console.log(studentsLower);

// function upperCase(element) {
//     return element.toUpperCase();
// }

// function lowerCase(element) {
//     return element.toLowerCase();
// }


// ------------ EXAMPLE 3 ------------
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}  