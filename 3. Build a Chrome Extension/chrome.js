// function save() {
//     console.log("Button Clicked from onclick")
// }

let myLeads = ["yes","no","maybe"]
const inputEl = document.getElementById("input__el")
const inputBtn = document.getElementById("input__btn")
const ulEl = document.getElementById("ul__el")

inputBtn.addEventListener("click", function() {
    console.log("Button Clicked from event listener!")
    //myLeads.push("www.awesomelead.com") - this is a hardcoded value
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
//Const cannot be reassigned
for (let i = 0; i < myLeads.length; i += 1) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}
