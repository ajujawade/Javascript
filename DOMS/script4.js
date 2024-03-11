let headone = document.querySelector('h1')
console.log(headone)

let button = document.querySelector('button')
console.log(button)

let text = document.querySelector('input')
console.log(text)


// headone.addEventListener('click', function() {

//     headone.style.color = 'red'

// })

// button.addEventListener('click', function() {

//     headone.style.color = "purple"

// })

button.addEventListener('click', function() {

    let color = text.value
    headone.style.color = color
    text.value = ""

})