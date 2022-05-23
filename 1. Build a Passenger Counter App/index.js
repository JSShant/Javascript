// document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)
// let myAge = 24
// console.log(myAge)
//Can only console.log before a value has been initialized//

// let myAge = 24
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let count = 5

// count = count + 1
// count = count + 10
// console.log(count)

// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// bonusPoints = bonusPoints - 75
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// function exercise() {
//     console.log(42)
// }

// exercise()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function time() {
//     console.log(lap1 + lap2 + lap3)  //Couldve also done let totalTime= Lap 1 + lap 2 + lap 3 then Console.log(totaltime)//
// }

// time()

// let lapscompleted = 0

// function incrementLap() {
//     lapscompleted = lapscompleted + 1
// }

// incrementLap()
// incrementLap()

// console.log(lapscompleted)


//initilize count as 0 LET FUNCTION
//listen for clicks on increment button
//increment the count variable
//change the count-el in the HTML to reflect new count
//Camel Case
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1  //count += 1 Same thing
    countEl.textContent = count
    console.log(count)
}

let saveEl = document.getElementById("save__el")
console.log(saveEl)
function save() {
    let countStr = count + " - "
    //saveEl.innerText += countStr //google:innerText alternative mdn
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

//Script Tag, Variables (LET), Number Datatype, Strings Datatype
// Console.log, functions, DOM -getElementById - innerText/textContent



//DOM Document Object model - how you use jAvascript to modify a website
//D- we interact with html "Document"/ O - take html element and put into JS "oject"
//M- Representation or a "model" representation of HTML element in JS