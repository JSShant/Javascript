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