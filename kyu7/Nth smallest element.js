const nthSmallest = (a, p) => a.sort((a,b) => a - b)[p - 1]

function nthSmallest(arr, pos){
    arr.sort((a,b) => a - b)
    return arr[pos - 1]
  }