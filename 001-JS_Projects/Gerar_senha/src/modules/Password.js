import { ValidatorPassword } from "./ValidationPassword";

export default class Password {
  constructor(amount = 5) {
    this.amount = amount
    this.arrayPassword = [];

  }

  get charRandom() {
    const randomPassword =
      ValidatorPassword
        .split('')
        .sort(() => { return 0.5 - Math.random() })
        .slice(-1)
        .join();
    
    return randomPassword;
  }

  create() {
    for (let i = 1; i <= this.amount; i++) {
      // if (this.lowercase || this.uppercase === true) {}

      this.arrayPassword
        .push(
          this.charRandom
            .split('')
            .sort(() => { return 0.5 - Math.random() })
            .join('')
        );
    }
    
    return this.arrayPassword.join('')
  }
}
