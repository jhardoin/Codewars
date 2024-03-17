function factorial(n){
    if(n < 0 || n > 12) throw error
    return Array.from({length:n}, (e,i) => i + 1).reduce((a,b) => a * b, 1)
  }

  function factorial(n) {
    if (n < 0 || n > 12)
      throw RangeError()
    let f = 1;
    while (n > 1)
      f *= n--;
    return f
  }

  function factorial(n){
    let r = 1
    while (n > 1) r *= n--
    return r
  }