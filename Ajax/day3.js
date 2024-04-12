// // Async and Sync

// // Program 1

// function  additionA(){

//     console.log("A")

// }

// function additionB(){

//     console.log("B")

// }

// additionA()
// additionB()

// Program 2

// function additionA(){

//     setTimeout(function(){
//         console.log("Iam A")
//     },3000)

// }

// function additionB(){

//     console.log("B")

// }

// additionA()
// additionB()


// Program 3

// function info(){

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
// info()

// Program 4


// function info() {

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
// info()

// Promises

// let pro = new Promise(function(resolve,reject){

//     let a = 10;
//     let b = 10;

//     if(a==b){
//         resolve( "Hello")
//     }else{
//         reject ("Bye")
//     }

// })

// pro
// .then(function(string){

//     console.log(string)

// },function(string){

//     console.log(string)

// })


// let pro2 = new Promise(function(resolve,reject){

//     let a = 10;
//     let b = 10;

//     if(a!=b){
//         resolve( "Hello")
//     }else{
//         reject ("Bye")
//     }

// })

// pro2
// .then(function(string){

//     console.log(string)

// })
// .catch(function(string){

//     console.log(string)

// })


// let pro3 = new Promise(function(resolve,reject){

//     let a = 10;
//     let b = 10;

//     if(a==b){
//         resolve( "Hello")
//     }else{
//         reject ("Bye")
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

//     console.log("I will Always Get Executed")

// })


// let pro4 = new Promise(function(resolve,reject){

//     let a = 10;
//     let b = 10;

//     if(a==b){
//         resolve( "Hello")
//     }else{
//         reject ("Bye")
//     }

// })

// pro4
// .then(function(string){

//     console.log(string)
//     return "Ajuuu"

// })

// .then(function(string){

//     console.log(string)

// })

// .catch(function(string){

//     console.log(string)

// })

// .finally(function(string){

//     console.log("I will Always Execute")

// })

function createUser(){

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("User Created")
        },3000)
    })

}

function getId(){

    return new Promise(function(resolve,reject){

        setTimeout(function(){

            resolve ("Get ID")

        },2000)

    })

}

function getInfo(){

    return new Promise(function(resolve,reject){

        setTimeout(function(){

            resolve("Get Info")

        },1000)

    })

}

// createUser()
// .then(function(string){

//     console.log(string)
//     return getId()

// })

// .then(function(string){

//     console.log(string)
//     return getInfo()
// })

// .then(function(string){

//     console.log(string)

// })


// Async and Await

async function getUserInfo(){

    let a = await createUser()
    console.log(a)

    let b = await getId()
    console.log(b)

    let c = await getInfo()
    console.log(c)


}

getUserInfo()











