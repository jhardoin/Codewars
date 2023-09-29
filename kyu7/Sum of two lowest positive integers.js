function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a-b)
    return numbers[0] + numbers[1]
  }

  function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b) => a - b)
    return sorted[0] + sorted[1]
  }