function getMissingElement(superImportantArray){
    let sorted = superImportantArray.sort((a,b) => a - b)
    for(let i = 0; i <= sorted.length; i++){
      if(sorted[i] !== i) return i
    }
  }