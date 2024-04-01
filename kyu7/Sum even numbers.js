const sumEvenNumbers = input => input.filter(e => e % 2 == 0).reduce((a,b) => a + b, 0)

function sumEvenNumbers(input) {
    return input.reduce((a,b) => a + (b % 2 == 0 ? b : 0), 0)
  }
  