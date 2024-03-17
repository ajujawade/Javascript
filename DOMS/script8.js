let btn = document.querySelector('button')

let ul = document.querySelector('ul')

let nodelistli = document.querySelectorAll('li')
console.log(nodelistli)

btn.addEventListener('click', function() {



    for (let i = 0; i < nodelistli.length; i++) {

        console.log(nodelistli[i].textContent)

        if (i % 2 == 0) {

            nodelistli[i].style.color = "red"
            nodelistli[i].textContent = nodelistli[i].textContent.toUpperCase()

        } else {
            nodelistli[i].style.color = "green"
            nodelistli[i].textContent = nodelistli[i].textContent.toLowerCase()
        }

    }


})




//