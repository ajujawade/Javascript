// let x = 100
// console.log(x)

// x = 200
// console.log(x)

//Arithmetic Operation & Opeartors

// let x1 = 100
// let x2 = 50

// console.log(x1 + x2)
// console.log(x1 - x2)
// console.log(x1 * x2)
// console.log(x1 / x2)
// console.log(x1 % x2)

// function calculator(x, y) {
//     console.log(x + y)
// }

// calculator(20, 10)
// calculator(-30, 10)
// calculator(20, 900)
// calculator(-20, -10)

// function calculator1() {
//     console.log(4 + 5)
// }

// calculator1()

// function calculator2(x, y) {
//     return x + y
// }

// q1 = calculator2(10, 8)
// console.log(q1)

// function hello(x) {
//     return "Hello Ajay"
// }

// console.log(hello())

// console.log(10 == "10")
// console.log(10 === '10')
// console.log(10 === 10)

// console.log(10 > 9 && 10 > 8)
// console.log(10 > 9 && 1 > 8)
// console.log(1 > 9 && 10 > 8)
// console.log(1 > 9 && 1 > 8)

// console.log(10 > 9 || 10 > 8)
// console.log(10 > 9 || 1 > 8)
// console.log(1 > 9 || 10 > 8)
// console.log(1 > 9 || 1 > 8)

// console.log(!true)
// console.log(!false)

// let a = 5
// let b = 19
// let c = 20

// if (a > b && a > c) {
//     console.log(a, "is Greater")
// } else if (b > a && b > c) {
//     console.log(b, "Is Greater")
// } else {
//     console.log(c, "is Greater")
// }

// let age = 19
// if (age > 18) { console.log("Can Drive") } else { console.log("Cannot Drive") }

// PASS CONTINUE BREAK

let num = 10

// for (i = 0; i < num; i++) {
//     console.log(i)
// }
// for (i = 0; i < num; i++) {
//     console.log(i)
//     if (i == 4) {
//         break
//     }
// }
// for (i = 0; i < num; i++) {
//     if (i == 4) {
//         continue
//     }
//     console.log(i)
// }
// let names = "Ajay"

// switch (names) {
//     case "Piyush":
//         console.log("Grade A")
//         break
//     case "Ajay":
//         console.log("Grade A+")
//         break
//     case "Ram":
//         console.log("Grade C")
//     default:
//         console.log("Please Try Again")

// }

// let name = "Bansal"
// switch (name) {
//     case "Piyush", "Bansal":
//         console.log("Grade A")
//         break
//     case "Ajay", "Tony":
//         console.log("Grade A+")
//         break
//     case "Ram", "Sham":
//         console.log("Grade C")
//     default:
//         console.log("Please Try Again")

// }

// let greater = true
// let x1 = 9
// let x2 = 9
// let x3 = 10

// switch (greater) {
//     case x1 > x2 && x1 > x3:
//         console.log("x1 is Greater")
//         break
//     case x2 > x1 && x2 > x3:
//         console.log("x2 is Greater")
//         break
//     default:
//         console.log("x3 is Greater")
// }

// let listA = [11, 22, 33, 44, 55, 66, 77]
// console.log(listA)
// for (let i = 0; i < listA.length; i++) {
//     //console.log(i)
//     console.log(listA[i])
// }
// listA.push(66)
// console.log(listA)

// len = listA.length
// console.log(len)

// q1 = listA.includes(66)
// console.log(q1)

// listA.pop()
// console.log(listA)

// listA.reverse()
// console.log(listA)

//q1 = listA.shift()
//console.log(q1)
//console.log(listA)

// q2 = listA.find() // how to use .find
// console.log(q2)

//console.log(listA.find(66))

// let total = 0
// for (let i = 0; i < listA.length; i++) {
//     total += listA[i]
// }
// console.log(total)

// q3 = listA.reduce(function(acc, el, index, arr) {
//     return el + acc
// })
// console.log(q3)

let listB = ["Ajay", "Tony", "Piyush", "Vineeta", "Nam"]

// q4 = listB.map(function(el, index, arr) {
//     return "HEY " + el
// })
// console.log(q4)

// listB.unshift("Shreyan")
// console.log(listB)

// listB.pop()
// console.log(listB)


// listB.shift()
// console.log(listB)

// q6 = listB.filter(function(el, index, arr) {
//     return el.length > 4
// })
// console.log(q6)

// index = listB.indexOf("Nam")
// console.log(index)

// console.log(listB.at(4))

// listB.reverse()
// console.log(listB)

// let cities = ["Pune", "Chandrapur", "Nagpur", "Kolkata"]

// e1 = cities.forEach(function(el, index, arr) {
//     console.log("Welcome To ", el)
// })
// console.log(e1)

let numbers = [22, 33, 55, 66, 678, 88, 76, 100]

// e2 = numbers.find(function(el, index, arr) {
//     return el > 55
// })
// console.log(e2)

// a7 = numbers.findIndex(function(el, index, arr) {
//     return el == 66
// })
// console.log(a7)

// a8 = numbers.every(function(el, index, arr) {
//     return el > 77
// })
// console.log(a8)

// a9 = numbers.some(function(el, index, arr) {
//     return el > 78
// })
// console.log(a9)

// let city1 = ["Pune", "Mumbai", "Chennai"]
// let city2 = ["Chandrapur", "Kolkata", "Bangalore"]
// console.log(city1)
// console.log(city2)

// city = city1.concat(city2)
// console.log(city)

// let example = [
//         ["Pune", "Mumbai", "Chennai"],
//         ["Chandrapur", "Kolkata", "Bangalore"],
//         ["Ajay", "Bunty", "Piyush"]
//     ]
//     // console.log(example[0][0])
//     // console.log(example[2][1])
//     // console.log(example[1][0])
//     // console.log(example[2][2])
//     // console.log(example[1][2])
//     // console.log(example[0][2])
//     // console.log(example[2][0])
//     // console.log(example[0][1])
//     // console.log(example[1][1])

// e4 = example.flat()
// console.log(e4)

// let states = [
//     ["Nagpur", 'Wardha'],
//     ["Jaipur", "Udaipur"],
//     ["Lucknow", "Kanpur"]
// ]
// console.log(states[0][0])
// console.log(states[1][1])
// console.log(states[1][0])
// console.log(states[2][1])
// let q2 = states.flat()
// console.log(q2)

//SLICE  delete by index, we need to give index to delete the elements

//              0        1           2           3         4          5
// let cities = ['pune', 'nagpur', 'hyderabad', 'kolkata', 'mumbai', 'chennai']
//         -6       -5         -4          -3          -2         -1

// q1 = cities.slice(3)
// console.log(q1)

// a1 = cities.slice(0, 4)
// console.log(a1)

// cities.splice(3)
// console.log(cities)

// s2 = cities.splice(2, 3)
// console.log(s2)
// console.log(cities)

// let fruits = ["Apple", "Mango", "Grapes", "Watermelon"]

// fruits.splice(1, 2, "Chikoo", "Guava", "Lemon")
// console.log(fruits)