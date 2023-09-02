function squareSum(numbers){
    return numbers.reduce((acc, cur) => acc + (cur ** 2), 0)
  }

  const squareSum = n => n.reduce((a,b) => a + b ** 2, 0)