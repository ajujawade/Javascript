// //includes

// let names = ["Ajay", "Tony", "Aju", "Seema"]
// a1 = names.includes("Aju")
// console.log(a1)

// // //Concat

// let state1 = ["Maharastra", 'Jammu', "Gujrat", 'AndraPradesh']
// let state2 = ['Tamil Nadu', 'MadhyaPradesh', 'Telangana']

// let state = state1.concat(state2)

// console.log(state)

// //flat()

// let example = [
//     ["Ajay", "Tony"],
//     ["Surekha", "Seema"],
//     ['Tamil Nadu', 'MadhyaPradesh', 'Telangana']
// ]
// console.log(example[0][0])
// console.log(example[2][1])
// console.log(example[1][0])
// console.log(example[1][1])
// console.log(example[0][1])
// console.log(example[2][0])

// a2 = example.flat()
// console.log(a2)

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
let cities = ['pune', 'nagpur', 'hyderabad', 'kolkata', 'mumbai', 'chennai']
    //         -6       -5         -4          -3          -2         -1
    // a4 = cities.slice(0, 3)
a5 = cities.slice(0, 4)
console.log(a5)
    // console.log(a5)
    //console.log(cities.slice(3))


//SPLICE we need to give the starting element and no. of element to delete

q1 = cities.splice(2, 3)
console.log(cities)
console.log(q1)


fruits = ['mango', 'apple', 'banana', 'tomato', ]
fruits.splice(1, 2, "chikoo", 'pineapple', 'xyz')
console.log(fruits)