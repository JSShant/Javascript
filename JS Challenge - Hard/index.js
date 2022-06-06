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

//4. Find all posts by a single user - Calling API's
async function postsByUser(uid) {
    const promise =  await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await promise.json()
    const posts =  result.filter(element => element.userId === uid)
    console.log(posts)
}
postsByUser(4)

// 5. First 6 incomplete tools

async function firstSixIncomplete(incom) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await promise.json()
    const firstSix = result.filter(element => element.completed === false).slice(0, 6)
    console.log(firstSix)
}
firstSixIncomplete(6)
