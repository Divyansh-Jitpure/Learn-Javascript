// Number guessing game

const minNum = 1
const maxNum = 10
const ans = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)

let attempts = 0
let guess
let running = true

while (running) {
    guess = prompt(`Guess a number bw ${minNum}-${maxNum}`)
    guess = Number(guess)

    if (isNaN(guess)) {
        alert("Pls enter a valid num")
    }
    else if (guess < minNum || guess > maxNum) {
        alert("Pls enter a valid num")
    }
    else {
        attempts++
        if (guess < ans) {
            alert('Too low try again')
        }
        else if (guess > ans) {
            alert('Too high try again')
        }
        else {
            alert(`Correct!! The ans was ${ans}. It took you ${attempts} attempts.`)
            running = false
        }
    }
}