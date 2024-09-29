function collatz(n) {
    let count = 1
    while(n !== 1){
      count++
      if(n % 2 === 0) n = n/2
      else n = n * 3 + 1
    }
    return count
  }

  function collatz(n) {
    let arr = []
    while(n !== 1){
      arr.push(n)
      n = n % 2 === 0 ? n/2 : n * 3 + 1
      if(n === 1) arr.push(n)
    }
    
    return arr.length
}