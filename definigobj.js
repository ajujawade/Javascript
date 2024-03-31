// let ajay = {

//     fn: "Ajay",
//     ln: "Jawade",

//     displayName: function() {

//         console.log(this.fn + " " + this.ln)

//     }

// }

// ajay.displayName()

// Constructor Function

// function Person(fn, ln) {

//     this.firstName = fn
//     this.lastName = ln

//     this.displayName = function() {

//         console.log(this.firstName + " " + this.lastName)

//     }

// }

// let ajay = new Person("Ajay", "Jawade")

// let tony = new Person("Tony", "Jawade")

// ajay.displayName()
// tony.displayName()


// constructor  ES6 class

// class Person {

//     constructor(fn, ln) {

//         this.firstName = fn
//         this.lastName = ln

//     }

//     displayName() {

//         console.log(this.firstName + " " + this.lastName)

//     }

// }

// let ajay = new Person("Ajay", "Jawade")

// ajay.displayName()

//set and get


// class Person {

//     setfirstName(fn) {

//         this.firstName = fn

//     }

//     setlastName(ln) {

//         this.lastName = ln

//     }

//     getfirstName() {

//         return this.firstName


//     }
//     getlastName() {

//         return this.lastName


//     }

// }


// let ajay = new Person()

// ajay.setfirstName("Ajay")
// ajay.setlastName("Jawade")

// console.log(ajay.getfirstName())
// console.log(ajay.getlastName())

class Person {

    set fn(fn) {

        this.firstName = fn

    }
    set ln(ln) {

        this.lastName = ln

    }

    get fn() {

        return this.fn

    }
    get ln() {

        return this.ln

    }
}


let ajay = new Person()

ajay.fn = "Ajay"
ajay.ln = "Jawade"

console.log(ajay.firstName)
console.log(ajay.lastName)



//