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