function isPrime(num) {
    if (num < 2) return false
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i === 0) return false
    }
    return true
  }
  

  function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1
  }

  function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1
}

function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0) {
      return false
    }
  }
  return num > 1
}

function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i == 0) return false
  }
  return num > 1
}


function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i == 0) return false
  }
  return num > 1
}
