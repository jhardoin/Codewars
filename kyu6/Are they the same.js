function comp(array1, array2){
    if(array1 == null || array2 == null) return false
    let a1 = array1.sort((a,b) => a - b).join('')
    let a2 = array2.map(e => Math.sqrt(e)).sort((a,b) => a - b).join('')
    return a1 == a2
  }

  function comp(array1, array2){
    if(!array1 || !array2) return false
    let unSqrd = array2.map(e => Math.sqrt(e)).sort((a,b) => a - b)
    let sorted = array1.sort((a,b) => a - b)
    return  JSON.stringify(unSqrd) == JSON.stringify(sorted)
}

function comp(array1, array2){
  return array1 && array2 ? array1.sort().toString() == array2.map(e => Math.sqrt(e)).sort().toString() : false
}

function comp(array1, array2){
  return array1 && array2 ? array1.sort().toString() == array2.map(e => Math.sqrt(e)).sort().toString() : false
}

function comp(array1, array2){
  return array1 && array2 ? array2.map(e => Math.sqrt(e)).sort().join('') == array1.sort().join('') : false
}

function comp(array1, array2){
  return array1 && array2 ? array1.sort().toString() == array2.map(e => Math.sqrt(e)).sort().toString() : false
}