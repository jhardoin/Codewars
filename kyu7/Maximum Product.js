function adjacentElementsProduct(array) {
    let result = []
    for(let i = 0; i < array.length - 1; i++){
      result.push(array[i] * array[i + 1])
    }
    return Math.max(...result)
  }

  function adjacentElementsProduct(array) {
    return Math.max(...array.map((e, i)=> e * array[i - 1]).slice(1));
  }

  function adjacentElementsProduct(array) {
    let max = Number.NEGATIVE_INFINITY 
    for(let i = 0; i < array.length - 1; i++){
      if(array[i] * array[i + 1] > max) max = array[i] * array[i + 1]
    } 
    return max
  }

  function adjacentElementsProduct(array) {
    let max = -Infinity
    for(let i = 0; i < array.length - 1; i++){
      let temp = array[i] * array[i + 1]
      if(temp > max) max = temp
    }
    return max
}