function validatePIN(pin) {
    let regExp = /^(\d{4}|\d{6})$/;
    return regExp.test(pin)
  }

  function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
  }

  function validatePIN (pin) {
    return (pin.length === 4 || pin.length === 6) && pin.split('').every(e => '1234567890'.includes(e))
}