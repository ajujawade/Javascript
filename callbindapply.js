// let ajay = {

//     firstName: "Ajay",
//     lastName: "Jawade",
//     displayName: function() {

//         console.log(this.firstName + this.lastName)

//     }
// }
// let tanushri = {

//     firstName: "Tanushri",
//     lastName: "Jivtode",

// }
// q1 = ajay.displayName
// q1()

let ajay = {

    firstName: "Ajay",
    lastName: "Jawade",

}
let tanushri = {

    firstName: "Tanushri",
    lastName: "Jivtode",

}

let disp = function() {

    console.log(`${this.firstName} ${this.lastName}`)

}

// bind method
aj = disp.bind(ajay)
aj()

tj = disp.bind(tanushri)
tj()

let disp1 = function(greet) {

    console.log(`${this.firstName} ${this.lastName}`)
    console.log(greet)

}

// call method
disp1.call(ajay, "Hello")
disp1.call(tanushri, "Hello")

// Apply Method
let disp2 = function(a) {

    console.log(`${this.firstName} ${this.lastName}`)
    for (let i = 0; i < a.length; i++) {
        console.log(a[i])
    }

}

disp2.apply(tanushri, ["Ajay", "Jawade"])

// Function Declaration

function displayColor(cl) {

    return cl + "G"

}

let r = displayColor("Green")
console.log(r)

let displayColor4 = (cl) => {
    return cl + "G"
}

let r3 = displayColor4("green")
console.log(r3)

let displayColor5 = (cl) => cl + "G"
let r4 = displayColor5('green')
console.log(r4)