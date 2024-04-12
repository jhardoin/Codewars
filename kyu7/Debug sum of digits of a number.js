function getSumOfDigits(integer) {
    return [...integer.toString()].reduce((a,b) => +b + a, 0)
  }