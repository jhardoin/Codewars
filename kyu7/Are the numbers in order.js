const inAscOrder = arr => JSON.stringify(arr) === JSON.stringify(arr.sort((a,b) => a - b))

function inAscOrder(arr) {
    return JSON.stringify(arr) == JSON.stringify(arr.sort((a,b) => a - b))
  }

  function inAscOrder(arr) {
    return arr.every((e,i) => i == 0 || arr[i] > arr[i-1])
  }

  function inAscOrder(arr) {
    return JSON.stringify(arr) == JSON.stringify(arr.sort((a,b) => a - b))
  }

  function inAscOrder(arr) {
    return arr.toString() === arr.sort((a,b) => a - b).toString()
}

function inAscOrder(arr) {
  return arr.toString() === arr.sort((a,b) => a - b).toString()
}

function inAscOrder(arr) {
  return arr.toString() === arr.sort((a,b) => a - b).toString()
}

function inAscOrder(arr) {
  return arr.toString() === arr.sort((a,b) => a - b).toString()
}