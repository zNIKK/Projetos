export class ValidatorPassword {
    constructor(lowercase=false, uppercase=false, symbols=false, number=true) {
        this.lowercase = lowercase;
        this.uppercase = uppercase;
        this.symbols = symbols;
        this.num = number;
    }


    get options() {
        const symbols = '!#$%&-./<=>?_~';
        const num = '0123456789';
        const alpha = 'abcdefghijklmnopqrstuvwxyz';

        let password = ''

        if (this.lowercase === true) {
            password += alpha;
        }

        if (this.uppercase === true) {
            password += alpha.toUpperCase();
        }

        if (this.symbols === true) {
            password += symbols
        }

        if (this.num === true) {
            password += num;
        }
        

        return password;
    }
}

