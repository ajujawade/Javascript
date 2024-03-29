class WorldBank {

    loan() {

        console.log("Loan From World Bank")

    }
    save() {

        console.log("Save from World Bank")

    }

}

class SBI extends WorldBank {

    loan() {

        console.log("Loan From SBI")
        super.loan()

    }

    save() {

        console.log("Save from SBI")
        super.save()

    }

}
class PNB extends WorldBank {

    loan() {

        console.log("Loan From PNB")
        super.loan()

    }

    save() {

        console.log("Save from PNB")
        super.save()

    }

}


let sbi = new SBI()

sbi.loan()

let pnb = new PNB()

pnb.save()