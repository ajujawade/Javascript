// // sync

// function additionA(){

//     console.log("A")

// }

// function additionB(){

//     console.log("B")

// }

// additionB()
// additionA()


// // async

// function additionC(){

//     setTimeout(function(){

//         console.log("C")

//     },3000)

// }

// function additionD(){

//     console.log("D")

// }

// additionC()
// additionD()

// // Program

// // User Create ---------- Get ID --------- Get Info

// function getinfo(){

//     setTimeout(function(){

//         console.log("User Created")

//     },3000)

//     setTimeout(function(){

//         console.log("Get ID")

//     },2000)

//     setTimeout(function(){

//         console.log("Get Info")

//     },1000)

// }

// getinfo()

// // Call Back Hell

// function getinfo() {

//     setTimeout(function () {

//         console.log("User Created")

//         setTimeout(function () {

//             console.log("Get ID")
//             setTimeout(function () {

//                 console.log("Get Info")

//             }, 1000)
//         }, 2000)
//     }, 3000)

// }

// getinfo()

// Promises

// Program with variation 1

// let pro = new Promise(function(resolve,reject){

//     let a = 10
//     let b = 5

//     if(a == b){

//         resolve("Hello")

//     }
//     else{

//         reject("Bye")

//     }
// })

// pro.then(function(string){

//     console.log(string)

// },function(string){

//     console.log(string)

// })

// // Program with variation 2

// let pro2 = new Promise(function(resolve,reject){

//     let cities = ["Pune","Mumbai","Nagpur","Kolkata"]
//     if(cities.includes("pune")){
//         resolve([11,22,33,44])
//     }
//     else {
//         reject([-11,-22,-33,-44])
//     }
// })

// pro2.then(function(a){

//     console.log(a)

// })
// .catch(function(b){

//     console.log(b)

// })


// // Program with Variation 3

// let pro3 = new Promise(function(resolve,reject){

//     let c = [1,2,3,4]
//     if(c.includes(33)){

//         resolve("Hello")

//     }
//     else{

//         reject("Bye")

//     }

// })

// pro3
// .then(function(string){

//     console.log(string)

// })
// .catch(function(string){

//     console.log(string)

// })
// .finally(function(){

//     console.log("I will Always Execute")
    
// })

let pro4 = new Promise(function(resolve,reject){

    let a = 10,b=10;

    if (a==b){

        resolve("Hello")

    }
    else{

        reject("Bye")

    }
    
})

pro4
.then(function(string){

    console.log(string)
    return "Ajuuu"

})

.then(function(string){

    console.log(string)

})

.catch(function(string){

    console.log(string)

})

.finally(function(){

    console.log("I will Always Execute")

})