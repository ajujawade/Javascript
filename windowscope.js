// // If a Variable is declared in Var then its scope is windows means global

// let ajay = {

//     firstName: "Ajay",
//     lastName: "Jawade",
//     displayName: function() {

//         console.log(`${this.firstName} ${this.lastName}`)


//         let displayName2 = function() {

//             console.log(`${this.firstName} ${this.lastName}`)

//         }
//         displayName2()
//     }

// }
// ajay.displayName()



var firstName = "Tony"
var lastName = "Jawade"


// console.log(window.firstName)
// console.log(window.lastName)


// let ajay2 = {

//     firstName: "Ajay",
//     lastName: "Jawade",
//     displayName1: function() {

//         console.log(this.firstName + this.lastName)


//         let displayName2 = function() {

//             console.log(this.firstName + this.lastName)

//         }
//         displayName2()
//     }

// }
// ajay2.displayName1()

// let ajay2 = {

//     firstName: "Ajay",
//     lastName: "Jawade",
//     displayName1: function() {

//         console.log(this.firstName + this.lastName)


//         let displayName2 = () => {

//             console.log(this.firstName + this.lastName)

//         }
//         displayName2()
//     }

// }
// ajay2.displayName1()

let ajay2 = {

    firstName: "Ajay",
    lastName: "Jawade",
    displayName1: () => {

        console.log(this.firstName + this.lastName)


        let displayName2 = () => console.log(this.firstName + this.lastName)

        displayName2()
    }
}
ajay2.displayName1()