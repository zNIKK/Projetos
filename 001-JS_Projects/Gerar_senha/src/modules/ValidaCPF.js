


class Password {
  constructor(amount = 5, num = true, lowercase = false, uppercase = false) {
    this.amount = amount;
    this.num = num;
    this.lowercase = lowercase;
    this.uppercase = uppercase;
    this.arrayPassword = []


  }

  static get alfaCharRandom() {
    // senha de a - z

    const alfa = 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .sort(() => { return 0.5 - Math.random() })
      .slice(-1)
      .join();

    return alfa;
  }

  static get numberRandom() {
    return Math.floor(Math.random() * 10);
  }

  get create() {
    for (let i = 0; i <= this.amount; i++) {
      if (this.lowercase || this.uppercase === true) { 
        let randomStr =
        Password.alfaCharRandom +
        Password.alfaCharRandom.toUpperCase() 
      }
      random= Password.numberRandom

      this.arrayPassword
      .push(
        randomStr
          .split('')
          .sort(() => { return 0.5 - Math.random() })
          .join('')
      );

    }
    return this.arrayPassword.join('')
  }
}

const password = new Password(20);

console.log(password.create);
// console.log(Password.numberRandom);