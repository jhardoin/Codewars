function rowWeights(array){
    if (array.length == 1) return [array[0], 0]
    let even = array.filter((e, i) => i % 2 == 0).reduce((a,b) => a + b);
    let odd = array.filter((e, i) => i % 2 !== 0).reduce((a,b) => a + b);
    return [even, odd]
  }

  function rowWeights(array){
    let one = array.filter((e,i) => i % 2 == 0).reduce((a,b) => a + b, 0)
    let two = array.filter((e,i) => i % 2 !== 0).reduce((a,b) => a + b, 0)
    return [one,two]
  }