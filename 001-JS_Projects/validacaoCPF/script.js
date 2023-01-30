// 705.484.450.52 070.987.720-03

/* 
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 241

11 - (237 % 11) = 5 (Primeiro digito)
Se o digito for maior que 9, consideramos 0

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  28  56  24  20  20  0   10 = 284

11 - (237 % 11) = 2 (Segundo digito)
Se o digito for maior que 9, consideramos 0

*/

// const cpf = [7,0,5,4,8,4,4,5,0,5,2]

// cpfCalc= cpf.map((element) => {return element * factorial(10)})


class ValidatorCPF {
    constructor(cpf) {
        this.cpf = cpf
        this.cpfFormated = Array.from(cpf.replace(/\D+/g, '')).reverse()
    }

    ; get findFirstDigit() {
        const cleanArrayCpf = this.cpfFormated.slice(2);
        const mappedArray = cleanArrayCpf.map(function (element, acc) {
            // console.log(element);
            return (acc + this) * element
        }, 2);
        const reducedArray = mappedArray.reduce((acc, element) => acc + element);
        // console.log(cleanArrayCpf, mappedArray);
        let validCpf = 11 - (reducedArray % 11)
        validCpf > 9 ? validCpf = 0 : null;
        return validCpf
    }

    get findSecondDigit() {
        const cleanArrayCpf = this.cpfFormated.slice(1);
        const mappedArray = cleanArrayCpf.map(function (element, acc) {
            return (acc + this) * element
        }, 2);
        const reduceArray = mappedArray.reduce((acc, element) => acc + element);
        const validCpf = 11 - (reduceArray % 11)
        validCpf > 9 ? 0 : null;
        return validCpf
    }
    get isValid() {

        if (this.findFirstDigit.toString() + this.findSecondDigit.toString() == this.cpf.slice(-2)) {
            return "CPF valid"
        } else {
            return "CPF invalid"
        }


    }
}


const validator = new ValidatorCPF('705.484.450-52')


console.log(validator.isValid);

