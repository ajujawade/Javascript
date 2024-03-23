let setA = new Set()

console.log(setA)

setA.add("Ajay")
setA.add("Aju")
setA.add("Tony")
setA.add("Seema")


console.log(setA)

let setB = new Set(["Ajay", "Tony", "Shrusti", "Seema"])

console.log(setB)

setB.add("Sonu")

console.log(setB)

console.log(setB.has("Tony"))

setB.delete("Seema")

console.log(setB)

console.log(setB.size)

setB.forEach(function(el) {

    console.log(el)

})

















//