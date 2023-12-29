function maxMultiple(divisor, bound){
    let result = 0
    for(let i = divisor; i <= bound; i += divisor){
      result = i
    }
    return result
  }

  function maxMultiple(divisor, bound){
    return Math.floor(bound/divisor) * divisor
  }