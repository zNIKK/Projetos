// 705.484.450.52 070.987.720-03

/* 
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  4 = 241

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


function fact(factNum) {
    for (let i = factNum; i >= 0; i--) {
        let calc = (factNum + 2) * i;
        return calc * factNum;
    }
}

class ValidatorCPF {
    constructor(cpf = string) {
        this.cpf = cpf;
        const arrayCpf = Array.from(cpf)

        // Object.defineProperty(this, 'cpf', {
        //     configurable: true,
        //     get: function () {
        //         return cpf;
        //     },
        //     set: function (valor) {
        //         if (typeof valor !== 'number') {
        //             throw Error('[cpf invalido]: cpf tem que ser um numero');
        //         }
        //     }
        // });

        Object.defineProperty(this, 'findFirstDigit', {
            get: function () {
                const revArrayCpf = arrayCpf.reverse()
                const mappedArray = revArrayCpf.map((acc, element) => acc *= element);
                const reduceArray = mappedArray.reduce((acc, element) => acc += element, 2);
                console.log(mappedArray);
                return 11 - (reduceArray % 11)
            }
    });""

    }
}


const validator = new ValidatorCPF('70548445052')

console.log(validator.findFirstDigit);

