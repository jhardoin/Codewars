function twoHighest(arr) {
    let noDupeArr = [...new Set(arr)].sort((a,b) => b - a)
    return noDupeArr.slice(0, 2)
  }