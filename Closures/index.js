// closure = A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
// They allow for private variables and state maintenance Used frequently in JS frameworks: React, Vue, Angular


// -----Example 01-----

// function outer() {

//     let msg = 'Hello'

//     function inner() {
//         console.log(msg);
//     }
//     inner()
// }

// outer()

// -----Example 02-----
function createCounter() {
    let count = 0
    function increment() {
        count++
        console.log(`Count increased to ${count}`);
    }
    return { increment }
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.increment()

counter.count = 0
console.log(count);