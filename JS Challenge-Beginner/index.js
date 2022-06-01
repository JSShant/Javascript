
// Sum of two variables
function addition(num1, num2) {
    return num1 + num2
    
}
console.log(addition(3,5));

//Converting Hours into seconds
function seconds(num1) {
    return num1*60*60
}
console.log(seconds(2))

//Perimeter of Rectangle
function permiter(num1, num2) {
    return 2*(num1 + num2)
}
console.log(permiter(6,7))

//Area of Triangle
function triangleArea(base, height){
    return 0.5*base*height
}
console.log(triangleArea(3,2))

//extending a string
function string(string) {
    return string + "frontend"
}
console.log(string("apple"))

function stringNumber(string) {
    return +string + 1 //putting +infront converts to number
}
console.log(stringNumber("3"))