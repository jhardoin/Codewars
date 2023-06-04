function sumMix(x){
    return x
            .map(n => parseInt(n))
            .reduce((acc, cur) => {
            return acc + cur
    }, 0)
  }