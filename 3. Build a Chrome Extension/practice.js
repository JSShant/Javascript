const boxBtn = document.getElementById("box__btn")
boxBtn.addEventListener("click", function() {
    console.log("I want to open the box")
})

let trueOfFalse = Boolean("hello")
console.log(trueOfFalse)

const welcomeEl = document.getElementById("welcome__el")

function greetUser(greeting) {
    welcomeEl.textContent =  greeting + " Joshua "
}
 
greetUser("Howdy")

function greetUser(greeting, name) {
    welcomeEl.textContent =  ` ${greeting} , ${name} `
}

greetUser("Howdy", "James")

function add(num1, num2) {
    return num1 + num2
}
console.log(add(3, 4))

function getFirst(arr) {
    return arr[0]
}
let firstCard = getFirst([10,2,5])
console.log(firstCard)

//Let, Const, Template Strings

const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

points += 100
hasWon = true

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!"`)
} else {
    console.log("The winner is " + opponent + "! " + player + " lost the game")
}

//Log out items in an array

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]
function logItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

logItems(myCourses)

//addEventListenere and object in Array
let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

let janeBtn = document.getElementById("jane__btn")

janeBtn.addEventListener("click", function() {
    console.log(data[0].score)
})

//generate sentence

function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    for (let i = 0; i < arr.length; i++) {
        baseString += arr[i] + ", "
    }
    return baseString
}
const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)