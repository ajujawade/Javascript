let names = ['Ajay', 'Jony', 'Aditya', 'Tejas']

a1 = names.map(function(el, index, arr) {
    return el + " Jawade"
})
console.log(a1)

let year = [1890, 1967, 1977, 1997, 2000, 2003]

a2 = year.map(function(el, index, arr) {
    return 2024 - el
})
console.log(a2)

let marks = [33, 45, 67, 65, 87, 98, 90, 1, 23, 46, 78, 43]

a3 = marks.filter(function(el, index, arr) {
    return el > 50
})
console.log(a3)

let numbers = [11, 22, 33, 445, 67, 36, 23, 90]

a4 = numbers.reduce(function(acc, el, index, arr) {
    return acc + el
})
console.log(a4)

let cities = ['Mumbai', 'Pune', 'Bangalore', 'Kolkata']

cities.forEach(function(el, index, arr) {
    console.log("Welcome " + el)
})

//numbers.forEach(function(el, index, arr) {
//   console.log(el > 50)
// })

a6 = numbers.find(function(el, index, arr) {
    return el > 50
})
console.log(a6)

a7 = numbers.findIndex(function(el, index, arr) {
    return el > 50
})
console.log(a7)

a8 = numbers.every(function(el, index, arr) {
    return el > 100
})
console.log(a8)

a9 = numbers.some(function(el, index, arr) {
    return el > 100
})
console.log(a9)