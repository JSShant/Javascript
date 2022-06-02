
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

//greater than 100
function sumGreater100(num1, num2) {
    sum = num1+num2
    if (sum <= 100) {
        return "false"
    } else {
        return "true"
    }
}
console.log(sumGreater100(20,10))

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100
}
console.log(sumGreaterThan100(20,10)) // Using BOOLEANS

//Less than or equal to zero
function lessThan(num1) {
    return num1 <= 0
}
console.log(lessThan(-5))

//Opposite Boolean
function oppositeBoolean(bool) {
    if (bool === true) {
        return "false"
    } else {
        return "true"
    }
}
console.log(oppositeBoolean(true))

function oppositeBoolean1(bool) {
    return !bool        //! infront of boolean value gives opposite
}
console.log(oppositeBoolean1(true))

function isNotZero(num1) {
    return num1 !== 0  // !== is the opposite of ===
}
console.log(isNotZero(5))

//Calculate Remainder
function calcRemainder(num1, num2) {
    return num1 % num2         //% remainder
}
console.log(calcRemainder(4, 3))

// is the number odd
function isOdd(num1){
    return num1 % 2 !== 0
}
 
console.log(isOdd(1))

//if a number is even return 1 otherwise return -1
function number(num1){
    if (num1 % 2 === 0) {
        return "1"
    } else {
        return "-1"
    }
}
console.log(number(2))
//Ternary Opeartor
function number1(num1) {
    return num1 % 2 === 0 ? 1 : -1
}
console.log(number1(1)) // false, "" , 0 are falsy statements