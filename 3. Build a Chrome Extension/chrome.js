// function save() {
//     console.log("Button Clicked from onclick")
// }

let myLeads = []
const inputEl = document.getElementById("input__el")
const inputBtn = document.getElementById("input__btn")
const ulEl = document.getElementById("ul__el")
let listItems = ""
inputBtn.addEventListener("click", function() {
    console.log("Button Clicked from event listener!")
    //myLeads.push("www.awesomelead.com") - this is a hardcoded value
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLeads()
})
//Const cannot be reassigned
function renderLeads() {
    for (let i = 0; i < myLeads.length; i += 1) {
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li) (
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}

//creating list item variable /Add array to Listitems instead of ulEL.innerHTML/Render listItems inside ulEl.innerHTML 
