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

  const sequenceSum = (begin, end, step) => {
    let sum = 0;
    for(var i=begin;i<=end;i+=step){
      sum += i;
    }
    return sum;
  }

  const sequenceSum = (begin, end, step) => {
    let n = Math.floor((end - begin) / step + 1);
    return n <= 0 ? 0 : n * (begin + (begin + (n - 1) * step)) / 2;
  }