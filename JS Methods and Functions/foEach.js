//  forEach() = method used to iterate over the elements
//                     of an array and apply a specified function (callback)
//                     to each element

//                     array.forEach(callback)
//                     element, index, array are provided


//--------------- Exapmle 1
let numbers = [1, 2, 3, 4, 5]

numbers.forEach(cube)
numbers.forEach(display)

// function double(element, index, array) {
//     array[index] = element * 2
// }

// function triple(element, index, array) {
//     array[index] = element * 3
// }

// function square(element, index, array) {
//     // array[index] = Math.pow(element, 2)
//     array[index] = element ** 2
// }

function cube(element, index, array) {
    // array[index] = Math.pow(element, 3)
    array[index] = element ** 3
}


function display(element) {
    console.log(element);
}

//--------------- Exapmle 2

// let strawHats = ['luffy', 'zoro', 'nami', 'ussop', 'sanji', 'chopper']

// strawHats.forEach(capilize)
// strawHats.forEach(display)

// function upperCase(e, i, arr) {
//     arr[i] = e.toUpperCase()
// }
// function lowerCase(e, i, arr) {
//     arr[i] = e.toLowerCase()
// }
// function capilize(e, i, arr) {
//     arr[i] = e.charAt(0).toUpperCase() + e.slice(1)
// }

// function display(element) {
//     console.log(element);
// }