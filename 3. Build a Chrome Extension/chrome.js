// function save() {
//     console.log("Button Clicked from onclick")
// }

let myLeads = []
const inputEl = document.getElementById("input__el")
const inputBtn = document.getElementById("input__btn")

inputBtn.addEventListener("click", function() {
    console.log("Button Clicked from event listener!")
    myLeads.push("www.awesomelead.com")
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
//Const cannot be reassigned

