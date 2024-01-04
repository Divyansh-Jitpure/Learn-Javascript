// Fisher-Yates algo

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

shuffle(cards);

console.log(cards);

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[random]] = [arr[random], arr[i]]
    }
}