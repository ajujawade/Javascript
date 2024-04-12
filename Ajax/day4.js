// function getInfo(){

//     setTimeout(function(){
//         console.log("User Created")
//     },3000)

//     setTimeout(function(){
//         console.log("Get ID")
//     },2000)

//     setTimeout(function(){
//         console.log("Get INFO")
//     },1000)

// }

// getInfo()

// Call Back HELL

// function getInfo() {

//     setTimeout(function () {
//         console.log("User Created")
//         setTimeout(function () {
//             console.log("Get ID")
//             setTimeout(function () {
//                 console.log("Get INFO")
//             }, 1000)
//         }, 2000)
//     }, 3000)

// }

// getInfo()

function userCreated(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("User Created")
        },3000)
    })
}

function userId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Get ID")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        resolve("Get INFO")
    })
}

// userCreated()
// .then(function(string){
//     console.log(string)
//     return userId()
// })
// .then(function(string){
//     console.log(string)
//     return getInfo()
// })
// .then(function(string){
//     console.log(string)
// })

// userCreated()

// Async and Wait

// async function userInfoB(){
//     let a = await userCreated()
//     console.log(a)

//     let b = await userId()
//     console.log(b)

//     let c = await getInfo()
//     console.log(c)
// }

// userInfoB()

// async code ------- sync
// user create ------ get id ------ get info

// callA
// callB
// callC

// Promise ------- promise combinations ----- 4 Methods

// promise.race()
// promise.any()
// promise.allSettled()
// promise.all()

// Promise.all([
//     Promise.resolve("Hello"),
//     Promise.resolve("Bye"),
//     Promise.resolve("Hello A")
// ])

// Promise.all([
//     Promise.resolve("Hello"),
//     Promise.resolve("Bye"),
//     Promise.reject("Hello A")
// ])

// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(arr){
//     console.log("All Not Resolved")
// })

// Program  

// Promise.allSettled([
//     Promise.resolve("Hello"),
//     Promise.resolve("Bye"),
//     Promise.reject("Hello Aju")
// ])

// .then(function(arr){
//     console.log(arr)
// })

function proOne(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Hello Ajay")
        },3000)
    })
}

function proTwo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Hello Ajuu")
        },2000)
    })
}

Promise.race([
    proOne(),
    proTwo()
])
.then(function(string){
    console.log(string)
})
.catch(function(string){
    console.log(string)
})


// Promise.any()

Promise.any([
    Promise.reject("Bye1"),
    Promise.reject("Bye2"),
    Promise.reject("Bye3"),
    Promise.resolve("Hello")
])

.then(function(arr){
    console.log(arr)
})