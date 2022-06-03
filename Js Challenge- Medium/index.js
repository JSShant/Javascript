//1. Falsy or Truthy - Return first one if falsy, otherwise return 2nd
  function filterOutFalsy (element1, element2) {
    if (!element1) {//This value runs if it is true, question states to return if false so ! reverses it
        return element1
    } else {
      return element2
    }
}
console.log(filterOutFalsy(1, 2))

function filterOutFalsyTeneryOp(element1, element2) {
    return !element1 ? element1 : element2 //Similar will only return the first one if it is true
}
console.log(filterOutFalsyTeneryOp(0,2))

//Return the length of any given array
function arrLength(arr) {
  return arr.length
}
console.log(arrLength([1, 2, 3, 4]))

//Get the last element in an array
function lastElem(arr) {
  return arr[arr.length - 1] //Arr.length gives the last count of array + 1 (because first one is 0)
}
console.log(lastElem([1, 2, 3, 6]))

//find the sum of an array
function arrSum(arr) {
  for (let i = 0; i < 3; ++i ) {
  console.log("run this code") //runs 3 times because i<3
  }
  console.log("for loop broken")
}
console.log(arrSum([1, 2, 3, 4]))
// Whenever you want to use every element of an array use a FOR LOOP

function arrSum1(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; ++i ) { // this is how you loop through every element in an array
  console.log(arr[i]) 
  sum = sum + arr[i]
  }
  return sum
}
console.log(arrSum1([1, 2, 3, 4]))

//Add up all numbers from one to the number given
function progressiveSum(num) {
  let sum = 0
  for (let i = 0; i <= num; ++i){
    sum = sum + i
  }
  return sum
}
console.log(progressiveSum(4))