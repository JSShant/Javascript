// function save() {
//     console.log("Button Clicked from onclick")
// }

let myLeads = []
const inputEl = document.getElementById("input__el")
const inputBtn = document.getElementById("input__btn")
const ulEl = document.getElementById("ul__el")

//localStorage.setItem("myLeads", "www.examplelead.com") //only strings in localStorage
//console.log (localStorage.getItem("myLeads") ) to check what youve hardcoded into storage
localStorage.clear()
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function() {
    //myLeads.push("www.awesomelead.com") - this is a hardcoded value
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

//Const cannot be reassigned
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i ++) {
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li) (
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
    `
    }
    ulEl.innerHTML = listItems
}

//creating list item variable /Add array to Listitems instead of ulEL.innerHTML/Render listItems inside ulEl.innerHTML 
