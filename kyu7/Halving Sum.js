function halvingSum(n) {
    let sum = 0;
  
    while (n >= 1) {
      sum += n;
      n = Math.floor(n / 2);
    }
  
    return sum;
  }

  function halvingSum(n) {
    let array = []
      while(n > 0){
        array.push(n)
        n = Math.floor(n/2)
      }
    return array.reduce((a,b) => a + b, 0)
  }
  

  function halvingSum(n) {
    let total = n
    while(n > 0){
      n = n/2
      total += Math.floor(n)
    }
    return total
  
}

function halvingSum(n) {
  let total = n
  while(n > 0){
    n = n/2
    total += Math.floor(n)
  }
  return total

}
