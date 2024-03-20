let headone = document.querySelector('h1')

let button = document.querySelector('button')

console.log(headone)

// class attribute

console.log(headone.className)

// headone.className = "six"

headone.classList.add('five')
headone.classList.remove('two')
headone.classList.toggle('three')
headone.classList.toggle('three')

// retrive

let a1 = headone.getAttribute("id")
console.log(a1)

headone.setAttribute('id', 'nine')
headone.setAttribute('data-cy', 'cypress')
headone.removeAttribute('id')

button.addEventListener('click', function() {

    headone.classList.toggle('green')
    headone.classList.toggle("red")

})




//