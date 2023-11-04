function factorial(n){
    if(n < 0 || n > 12) throw error
    return Array.from({length:n}, (e,i) => i + 1).reduce((a,b) => a * b, 1)
  }