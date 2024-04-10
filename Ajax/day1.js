// Program 1

// function additionA(){

//     console.log("A is Executed")

// }

// function additionB(){

//     console.log("B is Executed")

// }

// additionA()
// additionB()

// Program 2

// function additionA(){

//     setTimeout(function(){

//         console.log("A is Called")

//     },3000)

// }

// function additionB(){

//     console.log("B is Called")

// }

// additionA()
// additionB()

// Program 3

// function additionA(){

//     setTimeout(function(){

//         console.log("Iam A")

//     },4000)
// }
// function additionB(){
//     setTimeout(function(){

//         console.log("Iam B")

//     },3000)
// }
// function additionC(){
//     setTimeout(function(){

//         console.log("Iam C")

//     },1000)

// }

// additionA()
// additionB()
// additionC()

// function getInfo(){

//     setTimeout(function(){

//         console.log("User Created")

//     },3000)

//     setTimeout(function(){

//         console.log("Get id")

//     },2000)

//     setTimeout(function(){

//         console.log("Get Info")

//     },1000)

// }

// getInfo()

function getInfo() {

    setTimeout(function () {
        console.log("User Created")

        setTimeout(function () {
            console.log("Get id")

            setTimeout(function () {
                console.log("Get Info")
                
            }, 1000)
        }, 2000)
    }, 3000)




}

getInfo()




