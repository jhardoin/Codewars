const sumCubes = n => Array.from({length: n}, (v,i) => i + 1).map(e => e ** 3).reduce((a,b) => a+b)

function sumCubes(n){
    return Array.from({length : n + 1}, (e,i) => i ** 3).reduce((a,b) => a + b, 0)
  }