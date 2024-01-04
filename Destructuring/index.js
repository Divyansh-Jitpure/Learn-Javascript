// destructuring =  extract values from arrays and objects,
//                  then assign them to variables in a convenient way
//                  [] = to perform array destructuring
//                  {} = to perform object destructuring

// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a, b] = [b, a]

// console.log(a);
// console.log(b);

// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ['red', 'green', 'blue', 'black', 'white'];
// console.log(colors);

// [colors[3], colors[4]] = [colors[4], colors[3]]

// console.log(colors);

// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors = ['red', 'green', 'blue', 'black', 'white'];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// ---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS


// const p1 = {
//     name: "DJ",
//     age: 22,
//     job: "Engg"
// }
// const p2 = {
//     name: "PJ",
//     age: 23
// }

// const { name, age, job = "Unemployed" } = p1

// console.log(name);
// console.log(age);
// console.log(job);

// ---------- EXAMPLE 5 ----------
// DESTRUCTURING IN FUNCTION PARAMETERS

function displayP({ name, age, job = "Unemployed" }) {
    console.log(`name: ${name}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const p1 = {
    name: "DJ",
    age: 22,
    job: "Engg"
}
const p2 = {
    name: "PJ",
    age: 23
}

displayP(p1)
displayP(p2)