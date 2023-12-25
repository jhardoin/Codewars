const stray = numbers => numbers.reduce((a,b) => a ^ b)

const stray = numbers => numbers.reduce((a,b) => a ^ b)

function stray(numbers) {
    return +numbers.filter(e => numbers.indexOf(e) == numbers.lastIndexOf(e)).join()
  }