function getMissingElement(superImportantArray){
    let sorted = superImportantArray.sort((a,b) => a - b)
    for(let i = 0; i <= sorted.length; i++){
      if(sorted[i] !== i) return i
    }
  }

  function getMissingElement(superImportantArray) {
    return superImportantArray.reduce((a, b) => a - b, 45)
  }

  function getMissingElement(superImportantArray){
    let sorted = superImportantArray.sort((a,b) => a - b)
    for(let i = 0; i <= sorted.length; i++){
      if(sorted[i] !== i) return i
    }
  }