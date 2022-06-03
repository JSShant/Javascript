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