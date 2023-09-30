function getSum(a, b){
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    return (max - min + 1) * (max + min) / 2
  }

  function getSum(a, b){
    let result = []
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
      result.push(i)
    }
      return result.reduce((a,b) => a + b, 0)
  }