const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0
    let result = 0
    for(let i = begin; i <= end; i += step){
      result += i
    }
    return result
  };

  const sequenceSum = (begin, end, step) => {
    let result = []
    for(let i = begin; i <= end; i += step){
      result.push(i)
    }
    return result.reduce((a,b) => a + b, 0)
  };