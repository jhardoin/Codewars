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