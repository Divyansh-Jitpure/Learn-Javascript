// setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time Times are approximate
// setTimeout(callback, delay);


// function sayHello() {
//     alert("Heyaa");
// }

// setTimeout(sayHello, 3000);


// const timeoutId = setTimeout(() => alert("Hello"), 3000);

// clearTimeout(timeoutId)
let timeoutId;

const startTimer = () => {
    timeoutId = setTimeout(() => {
        alert("Hello")
    }, 3000);
    console.log("STARTED")
}

const stopTimer = () => {
    clearTimeout(timeoutId)
    console.log("CLEARED")
}