// Single Inheritance

class Student {

    firstName = "Ajay"
    lastName = "Jawade"

    displayName() {

        console.log(this.firstName + this.lastName)

    }

}

class Teacher extends Student {

    salary = 100000
    displaySalary() {

        console.log(this.salary)

    }

}

let ajay = new Teacher()

ajay.displayName()
ajay.displaySalary()

// Single Inheritance using constructor in parent class

class Student1 {

    constructor(fn, ln) {

        this.firstName = fn
        this.lastName = ln

    }

    displayName() {

        console.log(this.firstName + this.lastName)

    }

}

class Teacher1 extends Student1 {


    salary = 100000
    displaySalary() {

        console.log(this.salary)

    }

}

let ajay1 = new Teacher1("AJAY1", "JAWADE1")

ajay1.displayName()
ajay1.displaySalary()

// Single Inheritance using constructor in both class

class Student2 {

    constructor(fn, ln) {

        this.firstName = fn
        this.lastName = ln

    }

    displayName() {

        console.log(this.firstName + this.lastName)

    }

}

class Teacher2 extends Student2 {


    constructor(fn, ln, sl) {

        super(fn, ln)
        this.salary = sl


    }
    displaySalary() {

        console.log(this.salary)

    }

}
let ajay2 = new Teacher2("AJAY2", "JAWADE2", 20000)

ajay2.displayName()
ajay2.displaySalary()

// Multilevel Inheritance 

class Student3 {

    constructor(fn, ln) {

        this.firstName = fn
        this.lastName = ln

    }

    displayName() {

        console.log(this.firstName + this.lastName)

    }

}

class Teacher3 extends Student3 {


    constructor(fn, ln, sl) {

        super(fn, ln)
        this.salary = sl


    }
    displaySalary() {

        console.log(this.salary)

    }

}

class Proffesor extends Teacher3 {

    constructor(fn, ln, sl, sp) {
        super(fn, ln, sl)
        this.specialization = sp
    }

    displaySpec() {

        console.log(this.specialization)

    }

}

let ajay3 = new Proffesor("AJAY3", "JAWADE3", 20000, "Maths")

ajay3.displayName()
ajay3.displaySalary()
ajay3.displaySpec()


//