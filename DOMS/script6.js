let input = document.querySelector('input')

let ulist = document.querySelector('ul')

let button = document.querySelector('.addelement')


button.addEventListener('click', function() {

    let text = input.value
    let newel = document.createElement('li')
    newel.textContent = text
    createButton('Remove', 'remove', newel)
    createButton('Up', 'up', newel)
    createButton('Down', 'down', newel)
    ulist.appendChild(newel)
    input.value = ''

})


function createButton(text, className, li) {

    let newbutton = document.createElement('button')
    newbutton.textContent = text
    newbutton.classList.add(className)
    li.appendChild(newbutton)

}

let remove = document.querySelector('.remove')

remove.addEventListener('click', function() {

    ulist.ELEMENT_NODE()

})



// function createButton(newel) {

//     let r = document.createElement('button')
//     r.textContent = "Remove"
//     r.classList = "remove"
//     newel.appendChild(r)

//     let u = document.createElement('button')
//     u.textContent = "Up"
//     u.classList = "up"
//     newel.appendChild(u)

//     let d = document.createElement('button')
//     d.textContent = "Down"
//     d.classList = "down"
//     newel.appendChild(d)

// }




//