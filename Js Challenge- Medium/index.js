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