// using tag

let bytagname = document.querySelector("h1")
console.log(bytagname)

let byclass = document.querySelector(".one")
console.log(byclass)

let byid = document.querySelector("#two")
console.log(byid)

let byattribute = document.querySelector('h1[class="one"]')
console.log(byattribute)


// console.log(byattribute.textContent)
// byattribute.textContent = "Tony"
// console.log(byattribute.textContent)

byattribute.addEventListener('click', function() {

    byattribute.textContent = "Aju"
    byattribute.style.color = "black"
    byattribute.style.backgroundColor = "yellow"

})

bytagname.addEventListener('dblclick', function() {

    bytagname.textContent = "Hello Ajay"
    bytagname.style.backgroundColor = "white"
    bytagname.style.color = "green"

})