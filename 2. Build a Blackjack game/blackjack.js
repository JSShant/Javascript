let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
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

function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    } else if ( randomCard > 10 ) {
        return 10
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

console.log(cards)


function renderGame() {
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
    cardsEl.textContent = "Cards: " 
    for (let i= 0; i < cards.length; i+= 1) {
        cardsEl.textContent += cards[i] + "  "
    }
}

// Line 7 and 45/46 Storing message__el para in a variable messageEl then displaying using messageEl.textcontent
//Displaying Sum on the app as Sum: 'whatever sum is' Line 35/48
//Same thing but with Cards

//New Card Button
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
        console.log("Drawing a new card from the deck!")
    }
}
//create new card variable with a value and add it to sum variable (L60-62)
//Rename startGame as doesnt make sense, its being called in newCard.
//So we create renderGame, and this function calls startgame (L37-39)
//Arrays
//For loops line 53-56
//Stop hardcoding value of cards-random function for cards -getRandomCard (L38-41)