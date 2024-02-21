let year = [1987, 1989, 1999, 2000, 2003]
let age = []
a1 = year.map(function(el, index, arr) {
    return 2023 - el
})
console.log(a1)

let num = [11, 22, 33, 44, 55, 66, 77, 88]
a2 = num.map(function(el, index, arr) {
    return el + 10

})
console.log(a2)

let nums = [112, 34, , 5, 6, 7, 765, 43, 456543, 2345654, 343, 1, 3, 4, 522, 3422]
a3 = nums.filter(function(el, index, arr) {
    return el > 100
})
console.log(a3)

let transaction = [1234, 456, 76543, -234, -234, 565, -876]
deposit = transaction.filter(function(el, index, arr) {
    return el > 0
})
let transaction1 = [1234, 456, 76543, -234, -234, 565, -876]
withdral = transaction.filter(function(el, index, arr) {
    return el < 0
})
console.log(deposit)
console.log(withdral)

let numbers = [11, 22, 33]
sum = numbers.reduce(function(acc, el, index, arr) {
    return acc + el
})
console.log(sum)

let cities = ['Pune', 'Nagpur', 'Chandrapur', 'Mumbai']
cities.forEach(function(el, index, arr) {
    console.log("Welcome ", el)
})

let n = [12, 34, 56, 78, 90]
a6 = n.find(function(el, index, arr) {
    return el > 20
})
console.log(a6)

a7 = n.findIndex(function(el, index, arr) {
    return el == 56
})
console.log(a7)

a8 = n.every(function(el, index, arr) {
    return el > 10
})
console.log(a8)

a9 = n.some(function(el, index, arr) {
    return el > 70
})
console.log(a9)