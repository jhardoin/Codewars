function sumMix(x){
    return x
            .map(n => parseInt(n))
            .reduce((acc, cur) => {
            return acc + cur
    }, 0)
  }

  const sumMix = x => +x.reduce((a,b) => +a + +b)

  const sumMix = x => x.reduce((a,b) => +b + a, 0)