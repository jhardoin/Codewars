function high(x){
    let numArray = x.split(' ').map((e, i) => [...e].map(x => x.charCodeAt(0) - 96 ) )
    let reducedArray = ((numArray.map(e => e.reduce((a,b) => a + b))))
    let index = reducedArray.indexOf(Math.max(...reducedArray))
    return x.split(' ')[index]
  }