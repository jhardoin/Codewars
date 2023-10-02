function validatePIN(pin) {
    let regExp = /^(\d{4}|\d{6})$/;
    return regExp.test(pin)
  }

  function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
  }