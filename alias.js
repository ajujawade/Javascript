let names = ["Ajay", "Aditya", "Sonu"]

console.log(names)

let [a1, b1, c1] = names

console.log(a1)

console.log(b1)

console.log(c1)

// program 2

let fruits = ["mango", "banana", "apple"]

let [q1, , q2] = fruits

console.log(q1)

console.log(q2)

// pogram 3

let cities = [
    ['nagpur', 'wardha'],
    ['bhopal', 'indore'],
    ['lucknow', 'agra']
]

let [
    [a11, a22],
    [a33, a44],
    [a55, a66]
] = cities


console.log(a55)

// program 4

let info = {

    firstName: "Ajay",
    lastName: "Jawade"

}


let { firstName, lastName } = info

console.log(firstName)

let vehicle = {

    type: "Sports",
    color: "Red"

}

let { type: ty, color: cl } = vehicle

console.log(ty)

console.log(cl)

let info2 = {

    fullName: "Ajay Jawade",

    parents: {

        mother: "Surekha",
        father: "Latari"

    }

}

let { fullName, parents: { mother, father } } = info2

console.log(fullName)

console.log(mother)

let students = [{

    fn: "Ajay",
    ln: "Jawade"

}, {

    fn: "Aditya",
    ln: "Sorde"

}]

let [{ fn: aj, ln: ajs }, { fn: as, ln: ass }] = students

console.log(aj)
console.log(ajs)

console.log(ass)


let info3 = {

    firstName: "Ajay",
    lastName: "Jawade",
    sub: ["JS", "PYTHON"]

}

let { first, last, sub: [sub1, sub2] } = info3

console.log(sub1)
console.log(sub2)





//