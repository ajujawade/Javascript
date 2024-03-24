class Person {

    firstName = "Ajay"
    lastName = "Jawade"
    age = 20
    rollNo = 6

    display_name() {

        console.log(this.firstName + " " + this.lastName)

    }


}

// ES6 Class

let ajay = new Person()

ajay.display_name()

class Student {

    constructor(fn, ln, age, rollno) {

        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.rollNo = rollno
    }
    displayName() {

        console.log(`${this.firstName} ${this.lastName}`)

    }

}

let tony = new Student("Tony", "Jawade", 20, 6)


tony.city = "Upparwahi"
tony.displayName()
console.log(tony.city)









//