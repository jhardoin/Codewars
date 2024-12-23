const sumEvenNumbers = input => input.filter(e => e % 2 == 0).reduce((a,b) => a + b, 0)

function sumEvenNumbers(input) {
    return input.reduce((a,b) => a + (b % 2 == 0 ? b : 0), 0)
  }
  

  function sumEvenNumbers(input) {
    let sum = 0
    for(let i = 0; i < input.length; i++){
      if(input[i] % 2 === 0) sum += input[i]
    }
    return sum
}

function sumEvenNumbers(input) {
  return input.reduce((a,b) => a + (b % 2 == 0 ? b : 0), 0)
}


function sumEvenNumbers(input) {
  return input.reduce((a,b) => a + (b % 2 == 0 ? b : 0), 0)
}
