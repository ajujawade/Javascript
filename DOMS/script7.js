let addel = document.querySelector('.add')

let inputText = document.querySelector('input')

let ulist = document.querySelector('ul')

addel.addEventListener('click', function() {

    let text = inputText.value
    let newel = document.createElement('li')
    newel.textContent = text
    if (inputText.value == "") {
        pass
    } else {
        createButton('Remove', 'remove', newel)
        createButton('Up', 'up', newel)
        createButton('Down', 'down', newel)
    }
    ulist.appendChild(newel)
    inputText.value = ""

})

function createButton(textContent, className, el) {

    let createButton = document.createElement('button')
    createButton.textContent = textContent
    createButton.classList.add(className)
    el.appendChild(createButton)

}

ulist.addEventListener('click', function(event) {

    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.tagName)
    // console.log(event.target.className)

    if (event.target.tagName === 'BUTTON') {

        if (event.target.className === 'remove') {

            let li = event.target.parentElement
            let ulist = li.parentElement
            ulist.removeChild(li)

        } else if (event.target.className === 'up') {
            let li = event.target.parentElement
            let ulist = li.parentElement
            let prev = li.previousElementSibling
            if (prev) {
                ulist.insertBefore(li, prev)
            }
        } else if (event.target.className === 'down') {
            let li = event.target.parentElement
            let ulist = li.parentElement
            let next = li.nextElementSibling
            if (next) {
                ulist.insertBefore(next, li)
            }
        }

    }

})