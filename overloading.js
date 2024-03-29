// class Calculator {

//     add(x, y) {

//         console.log(x + y)

//     }

//     add(x, y, z) {

//         console.log(x + y + z)

//     }

//     add(x, y, z, a) {

//         console.log(x + y + z + a)

//     }

// }

// let addi = new Calculator()
// addi.add(10, 3)
// addi.add(2, 4, 5)
// addi.add(3, 4, 6, 7)

class addition {

    add(x, y, z, a) {
        if (x != undefined, y != undefined, z != undefined, a != undefined) {
            console.log(x + y + z + a)
        }
        if (x != undefined, y != undefined, z != undefined) {
            console.log(x + y + z)
        }
        if (x != undefined, y != undefined) {
            console.log(x + y)
        }
    }

}

let addi = new addition()
addi.add(10, 3)
addi.add(2, 4, 5)
addi.add(3, 4, 6, 7)


//