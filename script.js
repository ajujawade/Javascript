// let a = 100
// console.log(a)
// a = 300
// console.log(a)

// const h = 100
// console.log(h)

// //h = 10
// //console.log(h)


// let x = 13
// let y = 13

// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)

// function calculator(x, y) {
//     console.log(x + y)
//     console.log(x - y)
//     console.log(x * y)
//     console.log(x / y)
//     console.log(x % y)
//     return x
// }

// a1 = calculator(20, 1)

// console.log(a1)

// function calc(x1, y1) {
//     console.log(x1 + y1)

// }
// a2 = calc(8, 9)
// a2 = calc(8, 8)

// function cal(a, b) {
//     return a + b
// }
// a3 = cal(5, 4)
// console.log(a3 - 5)
// console.log(a3 / 3)

// console.log(10 == "10")

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

// let num = 13
// let num2 = 14
// let num3 = 15
// if (num > num2 && num > num3) {
//     console.log(num, " is Greater.")
// } else if (num2 > num && num2 > num3) {
//     console.log(num2, " is Greater.")
// } else {
//     console.log(num3, " is Greater.")
// }

// let age = 19

// if (age >= 18) { console.log("Can Drive") } else { console.log("Cannot Drive") }

// let i = 1
// while (i <= 5) {
//     if (i == 3) {
//         break

//     }
//     console.log(i)
//     i++
// }

// let name = "Sham"

// switch (name) {
//     case "Ajay":
//     case "Sham":
//         console.log("Grade A")
//         console.log("Good")
//         break
//     case "Ram":
//     case "Kima":
//         console.log("Grade C")
//         console.log("Need Improvement")
//         break
//     case "Raju":
//     case "Bijli":
//         console.log("Grade B")
//         console.log("Can Do Better")
//         break
// }


// let greater = true
// let x1 = 999
// let x2 = 91
// let x3 = 10
// switch (greater) {
//     case x1 > x2 && x1 > x3:
//         console.log('x1 is Greater.')
//         break

//     case x2 > x1 && x2 > x3:
//         console.log('x2 is Greater.')
//         break

//     default:
//         console.log("x3 is greater.")
// }

//let listA = [11, 22, 33, 44, 55, 66, 77, 88, 99]

// listA.push(999)
// console.log(listA)


// console.log(listA.length)

// a1 = listA.includes(22)
// console.log(a1)
// let listA = [11, 22, 33, 44, 55, 66, 77, 88, 99]
// let total = 0
// for (let i = 0; i < listA.length; i++) {
//     total = total + listA[i]
// }
// console.log(total)

// let cities = ['pune', 'nagpur', 'chandrapur']
// for (let i = 0; i < cities.length; i++) {
//     console.log("Welcome to ", cities[i])
// }

//Length
let names = ['Ajay', "Seema", "Priyanka", "Surekha", "Om"]
let q1 = names.length
console.log(q1)

//Push()

names.push("Shrusti")
console.log(names)

//unshift

names.unshift("Shreyan ")
console.log(names)

//POP

names.pop()
console.log(names)

names.pop()
console.log(names)

names.shift()
console.log(names)

s1 = names.indexOf("Ajay")
console.log(s1)

s2 = names.at(3)
console.log(s2)

names.reverse()
console.log(names)