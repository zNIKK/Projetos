import { ValidatorPassword } from "./ValidationPassword";

export class Password extends ValidatorPassword {

  constructor(amount = 5, lowercase, uppercase, symbols, number) {
    super(lowercase, uppercase, symbols, number)
    this.amount = amount
    this.arrayPassword = [];
    this.validator = new ValidatorPassword(
      lowercase,
      uppercase,
      symbols,
      number,
    );


  }

  get charRandom() {

    return this.validator.options
      .split('')
      .sort(() => { return 0.5 - Math.random() })
      .slice(-1)
      .join('');

  }

  create() {
    for (let i = 1; i <= this.amount; i++) {

      this.arrayPassword
        .push(
          this.charRandom
            .split('')
            .sort(() => { return 0.5 - Math.random() })
            .join('')
        );
    }

    return this.passwordFormated()
  }


  passwordFormated() {
    return this.arrayPassword.join('')
  }
}
