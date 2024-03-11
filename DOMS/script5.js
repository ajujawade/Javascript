let input = document.querySelector('input')
console.log(input)

let ulist = document.querySelector('ul')

let button = document.querySelector('button')
console.log(button)

button.addEventListener('click', function() {

    let text = input.value
    let newli = document.createElement('li')
    newli.textContent = text
    ulist.appendChild(newli)
    input.value = ""

})


//