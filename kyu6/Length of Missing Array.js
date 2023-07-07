function getLengthOfMissingArray(arrayOfArrays) {
    let sortLength = (arrayOfArrays || []).map(e => e ? e.length : 0)
                                          .sort((a,b) => a - b)
    
    if(sortLength.includes(0)){
      return 0
    }
    for(let i = 0; i < sortLength.length; i++){
      if(sortLength[i + 1] !== sortLength[i] + 1) {
        return sortLength[i] + 1
      }
    }
    return 0
  }
  