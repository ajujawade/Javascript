let info = {
    firstName: "Ajay",
    lastName: "Jawade",
    age: 20
}


// Retrive

console.log(info["firstName"])
console.log(info.firstName)

// Update

info.firstName = "Aju"
info["firstName"] = "Tony"

console.log(info)

// add

info.language = "Marathi"
info["adress"] = "Ajaypur"

console.log(info)

// Delete

delete info.adress
delete info.lastName

console.log(info)

vehicle = {
    color: "Black",
    type: "Sedane"
}

console.log(vehicle.color)
console.log(vehicle['type'])

vehicle["regNo"] = "MH 34 CA 0558 "
vehicle.seats = 4

vehicle["regNo"] = "MH34 AJ 0607"

delete vehicle.seats

console.log(vehicle)

let names = ["Chinmay", "Ajay", "Seema", "Priyanka"]
console.log(names)

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

for (let i = names.length - 1; i > -1; i--) {
    console.log(names[i])
}

let ajay = {
    firstName: "Ajay",
    lastName: "Jawade",
    age: 20,
    rollNo: 45
}

console.log(ajay["firstName"])

for (let keys in ajay) {
    console.log(keys, ajay[keys])
}

let students = [{
        firstName: "Ajay",
        lastName: "Jawade",
        age: 20,
        class: "3rd Year"
    },
    {
        firstName: "Tony",
        lastName: "Jawade",
        age: 20,
        class: "3rd Year"
    },
    {
        firstName: "Aditya",
        lastName: "Jawade",
        age: 20,
        class: "3rd Year"
    }
]

console.log(students)

console.log(students[2].firstName)