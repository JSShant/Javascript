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
