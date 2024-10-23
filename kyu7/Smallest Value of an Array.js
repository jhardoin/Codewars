const min = (arr, toReturn) => (toReturn == 'value') ? Math.min(...arr) : arr.indexOf(Math.min(...arr))

function min(arr, toReturn) {
    return toReturn == 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
  }

  function min(arr, toReturn) {
    if(toReturn === 'value'){
      return Math.min(...arr)
    }
    else return arr.indexOf(Math.min(...arr))
}

function min(arr, toReturn) { 
  return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}