function sumDigits(number) {
    return Math.abs(number).toString().split('').map(e => Number(e)).reduce((a,b) => a+b)
  }