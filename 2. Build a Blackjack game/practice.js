// If....Else Statements
let age = 22
if (age < 21) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome!")
}
let age2 = 10
if (age2 < 100) {
    console.log("Not eligible")
} else if (age2 = 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not eligible, you have already gotten one")
}

// Arrays - ordered list of items

let featuredPosts = [
    "Check out my Netflix Clone", 
    "Heres the code for my project"
]
// Arrays are 0 indexed

console.log( featuredPosts[0] )
console.log( featuredPosts.length )
let myExperience = [
    "Javascript", 
    "HTML", 
    "CSS"
]
//You can put any datatype into an Array
let joshS = [
    "Joshua", 
    24, 
    true
]
//adding or removing from Arrays
let cards = [7, 4]
cards.push(6)
console.log(cards)
//remove last item in an array
cards.pop()
console.log(cards)

//COUNTING

for (let count =1; count < 11; count+= 1 ) {

    console.log(count)
}

// FOR LOOPS
for (let i = 10; i < 101; i+= 10) {
    console.log(i)
}

// ARRAYS AND LOOPS

let potato = [11, 6, 7, 8, 9]
for (let i = 0; i < potato.length; i+=1) {
    console.log(potato[i])
}

//For loops, Arrays and DOM
let sentence = ["hello", "my", "name", "is", "josh"]
let greetingEl = document.getElementById("greeting__el")
for (let i = 0; i < sentence.length; i+=1) {
    greetingEl.textContent += sentence[i] + " "
}

//returning values in functions
let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}
let fastestRace = getFastestRaceTime()
console.log(fastestRace)

function totalRaceTime() {
    return player1Time + player2Time
}
let total = totalRaceTime()
console.log(total)

//generating random numbers
let randomNumber = Math.random() 
console.log(randomNumber)
let randomNumber2 = Math.random() * 6 //gives value ranging from 0-5.99
console.log(randomNumber2)
let flooredNumber = Math.floor(3.185632) //removes decimals
console.log(flooredNumber)
let randomNumber3 = Math.floor( Math.random() * 6 ) + 1 //Dice random number
console.log(randomNumber3)

function rollDice() {
    let diceRoll = Math.floor( Math.random() * 6) + 1
    return diceRoll
}
console.log( rollDice () )

//Logical Operators
let hasCompletedCourse = true
let givesCertificate = true
if (hasCompletedCourse === true && givesCertificate === true) {
    generateCerticate()
}
function generateCerticate () {
    console.log("Generating Certificate")
}

let hasSolvedChallenge = false
let hasHintsLeft = false
if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}
function showSolution() {
    console.log("Showing the solution..")
}
// && is the logical 'and' operator
let likesDocumentaries = true
let likesStartups = false
if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}
function recommendMovie() {
    console.log("Hey, check out this film!")
}
//  || is the logical 'or' operator

//OBJECTS
let course = {
    title: "learn css grid for free",
    lesson: 16,
    creator: "Josh",
    length: 63,
    level: 2,
    isFree: true
}

console.log(course.length) 

// CHALLENGES
// OBJECTS AND FUNCTIONS
let person = {
    name: "Joshua",
    age: 24, 
    country: "Australia"
}

function logdata() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}
logdata()

// // IF ELSE
// // let age1 = 15
// // console.log(discount())
// // if (age1 < 6) {
// //     console.log("free")
// // } else if (age1 <= 17) {
// //     console.log("child")
// // } else if (age1 <= 26) {
// //     console.log("student")
// // } else if (age1 <= 66) {
// //     console.log("full")
// // }

//LOOPS AND ARRAYS
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
for (let i = 0; i < largeCountries.length; i++) {
    console.log(" - " + largeCountries[i])
}

//Push, Pop , shift, unshift
let largeCountries1 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
largeCountries1.pop()
largeCountries1.push("Pakistan")
largeCountries1.shift()
largeCountries1.unshift("China")
console.log(largeCountries1)

//logical operations
let datOfMonth = 13
let weekday = "Friday"
if (datOfMonth === 13 && weekday === "Friday") {
    console.log("Its Friday the 13th")
}

//Rock Paper Scissors
let hands = ["rock","paper","scissor"]
function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}
console.log(getHand())
//Sorting Fruits
