function comp(array1, array2){
    if(array1 == null || array2 == null) return false
    let a1 = array1.sort((a,b) => a - b).join('')
    let a2 = array2.map(e => Math.sqrt(e)).sort((a,b) => a - b).join('')
    return a1 == a2
  }