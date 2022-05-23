let firstName = "Joshua" //a space here adds a space to the console
let lastName = "Shant"       //or adding a space before last name
let fullName = firstName + " " + lastName
console.log(fullName)

let name = "Josh"
let greeting = "Hi there"
let message = greeting +"," + " " + name +"!"
console.log(message)

function greetJosh() {
    console.log(greeting + ", " + name + "!")
}
greetJosh()


let myPoints = 3
function add3Points() {
    myPoints += 3
}
function remove1Point() {
    myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints)


