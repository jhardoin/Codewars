const factorial = n => Array.from({length:n}, (e,i) => i + 1).reduce((a,b) => a * b, 1)

function factorial(n){
    if (n < 0 || n > 12) throw error
    if(n == 0) return 1
    return Array.from({length:n}, (e,i) => i + 1).reduce((a,b) => a * b, 1)
}

function factorial(n){
    if(n < 0 || n > 12) throwRangeError()
    return Array.from({length:n}, (_, i) => i + 1).reduce((a,b) => a * b, 1)
  }

  function factorial(n){
    if(n < 0 || n > 12) throw new RangeError()
    return n <= 1 ? 1 : n * factorial(n - 1)
}