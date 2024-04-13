// Promises Combinators

// Promise.all()
// Promise.race()
// Promise.allSettled()
// Promise.any()

// Promise.all([
//     Promise.resolve("Hello"),
//     Promise.resolve("Ajay"),
//     Promise.resolve("Bye"),
// ])

// .then(function(a){
//     console.log(a)
// })
// .catch(function(string){
//     console.log("All Not Resolved")
//     console.log(string)
// })

// Promise.allSettled([
//     Promise.resolve("Ajay"),
//     Promise.resolve("How Are You?"),
//     Promise.reject("Okay Bye!")
// ])

// .then(function(arr){
//     console.log(arr)
// })

// function proOne(){
//     return new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Hey Ajay!")
//     },3000)
// })
// }

// function proTwo(){
//     return  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Hello Tony!")
//     },2000)
// })
// }

// function proThree() {
//     return new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Hey Ashlesha!") // Either Reject or Resolve the less the less time wins the race
//     },1000)
// })
// }

// Promise.race([
//    proOne(),
//    proTwo(),
//    proThree()
// ])

// .then(function(string){
//     console.log(string)
// })

// .catch(function(string){
//     console.log(string)
// })

Promise.any([
    Promise.reject("Ajay"),
    Promise.reject("Tony"),
    Promise.resolve("Ashlesha"),
    Promise.reject("Vishnu")
])

.then(function(string){
    console.log(string)
})

.catch(function(string){
    console.log(string)
})