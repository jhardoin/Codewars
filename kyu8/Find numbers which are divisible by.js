function divisibleBy(numbers, divisor){
    return numbers.filter((number) => number % divisor === 0)
  }

  const divisibleBy = (numbers, divisor) => numbers.filter(e => !(e % divisor))