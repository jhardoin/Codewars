function SeriesSum(n){
    let result = 0;
    for(let i = 0; i < n; i++){
      result += 1/(1 + i * 3)
    }
    return result.toFixed(2)
  }

  function SeriesSum(n) {
    let sum = 0
    for(let i = 0; i < n; i++){
      sum += 1 / (3 * i + 1)
    }
    return sum.toFixed(2)
  }

  function SeriesSum(n) {
    let i = 0
    let result = 0
    while(i < n){
      if(i === 0) result += 1
      else result += 1/(4 + ((i - 1) * 3))
      i++
    }
    return result.toFixed(2)
}