let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message__el")
// if (sum <= 20) {
//     console.log("Do you want to draw a new card?")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack!")
//     hasBlackJack = true
// } else {
//     console.log("You're out of the game!")
//     isAlive = false
// }

//Cash Out Boolean Conditions - True and False (Lines 4/5)

// Declaring Variable called message and assigning to empty string
// Reassinging message to the strings and logging them out

// if (sum <= 20) {
//     message = "Do you want to draw a new card?"
// } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack!"
//     hasBlackJack = true
// } else {
//     message = "You're out of the game!"
//     isAlive = false
// }
//console.log(message)

// Creating an interactive Button MOVED CONDITIONAL Lines 20-29 into function below
let sumEl = document.getElementById("sum__el")
let cardsEl = document.getElementById("cards__el")
function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " , " + secondCard
    console.log(message)

}

// Line 7 and 45/46 Storing message__el para in a variable messageEl then displaying using messageEl.textcontent
//Displaying Sum on the app as Sum: 'whatever sum is' Line 35/48
//Same thing but with Cards

