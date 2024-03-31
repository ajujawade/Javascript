// function Constructor

// function Person(fn, ln) {

//     this.firstName = fn
//     this.lastName = ln
//     this.displayName = function() {

//         console.log(this.firstName + " " + this.lastName)

//     }

// }
// let ajay = new Person("Ajay", "Jawade")

// ajay.displayName()


function Person(fn, ln) {

    this.firstName = fn
    this.lastName = ln
        // this.displayName = function() {

    //     console.log(this.firstName + " " + this.lastName)

    // }

}

let ajay = new Person("Ajay", "Jawade")

let tony = new Person("Tony", "Jawade")

console.log(ajay)
console.log(tony)

//every object has one property __proto__ === Parent.prototype

console.log(ajay.__proto__ === Person.prototype)
console.log(tony.__proto__ === Person.prototype)

Person.prototype.country = "INDIA"

console.log(ajay.country)
console.log(tony.country)

Person.prototype.displayName = function() {

    console.log(this.firstName + " " + this.lastName)

}

ajay.displayName()
tony.displayName()

let names = ["Ajay", "Jawade"]

// Array.prototype.ajay = function() {

//     console.log("Hello Aju !")

// }

// names.ajay()



console.log(names instanceof Array)
console.log(ajay instanceof Person)
console.log(tony instanceof Person)

let a = ajay.hasOwnProperty("firstName")
console.log(a)

let b = ajay.hasOwnProperty("country")
console.log(b)

let c = ajay.hasOwnProperty("displayName")
console.log(c)

//