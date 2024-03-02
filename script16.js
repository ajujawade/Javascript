let firstName = "Ajay"
let lastName = "Jawade"

console.log(firstName)
console.log(lastName)


console.log("My First Name is " + firstName + " and My Last Name is " + lastName)

console.log(`My First Name is ${firstName} and My Last Name is ${lastName} :)`)

//////////////////////////////////////////////////////////////////////////////////////////

let a = 4
let b = 2
let c = "Ajay"

console.log(a + b + c)
console.log(c + a + b)
console.log(b + a + c)
console.log(b + c + a)

let city = "CHANDRAPUR"

console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

for (let i = 0; i < city.length; i++) {

    console.log(city[i])

}

for (let i = city.length - 1; i >= 0; i--) {

    console.log(city[i])

}

i = 0

while (i < city.length) {

    console.log(city[i])
    i++
}

i = city.length - 1
while (i >= 0) {

    console.log(city[i])
    i--
}


let city2 = "Nagpur"

let revst = ""

for (let i = 0; i < city2.length; i++) {

    revst = city2[i] + revst
}

console.log(revst)














//.