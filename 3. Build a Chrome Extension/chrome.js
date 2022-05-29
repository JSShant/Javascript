// function save() {
//     console.log("Button Clicked from onclick")
// }

let myLeads = []
const inputEl = document.getElementById("input__el")
const inputBtn = document.getElementById("input__btn")
const ulEl = document.getElementById("ul__el")
const delBtn = document.getElementById("delete__btn")

//localStorage.setItem("myLeads", "www.examplelead.com") //only strings in localStorage
//console.log (localStorage.getItem("myLeads") ) to check what youve hardcoded into storage

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i ++) {
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li) (
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
    `
    }
    ulEl.innerHTML = listItems
}

console.log(leadsFromLocalStorage)

delBtn.addEventListener("dblclick", function() {
    console.log("double cliked!")
    localStorage.clear()
    myLeads = ""
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    //myLeads.push("www.awesomelead.com") - this is a hardcoded value
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

//Const cannot be reassigned
// function render() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i ++) {
//         //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//         // const li = document.createElement("li")
//         // li.textContent = myLeads[i]
//         // ulEl.append(li) (
//         listItems += `
//             <li>
//                 <a target='_blank' href='${myLeads[i]}'>
//                     ${myLeads[i]}
//                 </a>
//             </li>
//     `
//     }
//     ulEl.innerHTML = listItems
// }

//creating list item variable /Add array to Listitems instead of ulEL.innerHTML/Render listItems inside ulEl.innerHTML 
