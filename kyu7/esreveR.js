reverse = function(array) {
    let result = []
    for(let i = 1; i <= array.length; i++){
      result.push(array[array.length - i])
    }
    return result
  }