const inAscOrder = arr => JSON.stringify(arr) === JSON.stringify(arr.sort((a,b) => a - b))

function inAscOrder(arr) {
    return JSON.stringify(arr) == JSON.stringify(arr.sort((a,b) => a - b))
  }