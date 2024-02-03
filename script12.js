let year = [1990, 1980, 1972, 2000, 2003]
let ages = []
for (let i = 0; i < year.length; i++) {
    //console.log(i)
    //console.log(year[i])
    console.log(2024 - year[i])
    let x = 2024 - year[i]
    ages.push(x)
}
console.log(ages)


let q1 = year.map(function(el, index, arr) {
    return 2023 - el
})
console.log(q1)

let marks = [67, 87, 56, 88, 90, 99, 45, 78, 87]
let above80 = []

for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 80) {
        above80.push(marks[i])
    }
}
console.log(above80)

let q2 = marks.filter(function(el, index, arr) {
    return el > 80
})
console.log(q2)

let numbers = [11, 22, 33, 44, 55]
let total = 0

for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i]
}
console.log(total)

q3 = numbers.reduce(function(acc, el, index, arr) {
    return acc + el
})
console.log(q3)



let mark = [90, 33, 44, 55, 66, 88, 34, 87]


a1 = mark.map(function(el, index, arr) {
    return el / 90 * 100
})

console.log(a1)

let amarks = [44, 55, 66, 77, 88, 99]
a2 = amarks.reduce(function(acc, el, index, arr) {
    return acc + el

})
console.log(a2 / amarks.length)


names = ['ajay', 'aju', 'ojas', 'seema', 'tejas']

e1 = names.filter(function(el, index, arr) {
    return el
})
console.log(e1)