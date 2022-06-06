// 1. Display a rating
function showRating (num1) {
    let ratings = ""
    for (let i = 0; i < Math.floor(num1); ++i) {
        if (i === ratings - 1) {
            ratings = ratings + "*"
        } else {
        ratings = ratings + "* "
        }
    }
    if (!Number.isInteger(num1)) {
        ratings = ratings + "."
    }
    return ratings
}
console.log(showRating(4.5))

// 2. Sorting by lowest to highest 
function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b)
}
console.log(sortLowToHigh([1, 2, 6, 3, 5, 2, 8]))

// 3. Sort High to Low
function sortHighToLow(arr) {
    return arr.sort((a, b) => b.price - a.price)
}
console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60}
]))