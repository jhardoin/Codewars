function multiplyAll(array) {
    return function anotherFunction(i){
      return array.map(e => e * i)
    }
  }
  
  const multiplyAll = arr => n => arr.map(x => n * x)

  const multiplyAll = arr => n => arr.map(x => n * x)