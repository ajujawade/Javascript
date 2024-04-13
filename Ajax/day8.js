function getUserPage(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(response){
        // console.log(response)\
        return response.data[0].id
    })
}

// getUserPage(2)


function getUserByid(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(response){
        // console.log(response)
        return response.data
    })
}

// getUserByid(2)

function renderHTML(el){
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h1>${el.email}</h1>`)
    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<img src = ${el.avatar}>`)
}

let id = getUserPage(prompt("Enter Page Number "))

.then(function(id){
    return getUserByid(id)
})


.then(function(obj){
    renderHTML(obj)
})
