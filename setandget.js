class Person {

    set fn(fn) {

        this.firstname = fn

    }
    get fn() {

        return this.firstname

    }

    set ln(ln) {

        this.lastname = ln

    }

    get ln() {

        return this.lastname

    }

}

let ajay = new Person()

ajay.fn = "Ajay"

console.log(ajay.fn)
console.log(ajay)

ajay.ln = "Jawade"
console.log(ajay.ln)
console.log(ajay)