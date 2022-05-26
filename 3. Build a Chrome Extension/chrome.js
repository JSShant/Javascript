function save() {
    console.log("Button Clicked from onclick")
}

let inputBtn = document.getElementById("input__btn")
inputBtn.addEventListener("click", function() {
    console.log("Button Clicked from event listener!")
})