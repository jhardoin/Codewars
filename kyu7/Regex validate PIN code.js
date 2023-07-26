function validatePIN(pin) {
    let regExp = /^(\d{4}|\d{6})$/;
    return regExp.test(pin)
  }