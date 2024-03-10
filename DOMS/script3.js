let headone = document.querySelector("h1")
console.log(headone)

let input = document.querySelector("input")
console.log(input)

let button = document.querySelector("button")
console.log(button)


// bybutton.addEventListener('click', function() {

//     headone.style.color = "red"

// })


button.addEventListener('click', function() {

    let colorText = input.value
    headone.style.color = colorText

    input.value = ""

})



//