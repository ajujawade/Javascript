let info = {

    firstName: "Ajay",
    lastName: "Jawade",
    age: 20,
    1: 35
}
console.info(info)


for (let key in info) {

    //console.log(key)
    console.log(info[key])
        // console.log(typeof key)
}

// to be remembered : object store keys as string whether it is number dosnt matter.

//Program 1

let roles = new Map()
console.log(roles)

roles.set(1, "Admin")
roles.set(2, "Manager")
roles.set(3, "Customer")
roles.set(4, "Employee")

console.log(roles)

console.log(roles.get(1))
console.log(roles.get(2))
console.log(roles.get(3))
console.log(roles.get(4))

// Program 2

let skills = ["Python", "Javascript", "SQL"]
let info2 = {

    firstName: "Ajay",
    lastName: "Jawade"

}
let canDrive = true

let names = new Map([

    [skills, 3],
    [info2, 2],
    [canDrive, "yes"],
    [1, "roll_NO"],
    ["fullName", "Ajay Jawade"]

])

console.log(names)

console.log(names.get(1))
console.log(names.get(skills))

// Program 3

let x = names.has(info2)
console.log(x)


// Program 4

let roles2 = new Map([

    [1, "Admin"],
    [2, "Manager"],
    [3, "Customer"],
    [4, "Employee"]

])

console.log(roles.get(1))

// roles.clear()
// console.log(roles2)

roles2.forEach(function(val, key) {

    console.log(typeof val, typeof key)


})


let mapA = new Map([

    ["MH", "Chandrapur"],
    ["UP", "Kanpur"],
    ["RJ", "Rajasthan"]

])

for (let key of mapA.keys()) {

    console.log(key)

}

for (let val of mapA.values()) {

    console.log(val)

}

for (let [k, v] of mapA.entries()) {

    console.log(k, v)

}

//