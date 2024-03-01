function twoHighest(arr) {
    let noDupeArr = [...new Set(arr)].sort((a,b) => b - a)
    return noDupeArr.slice(0, 2)
  }

  function twoHighest(arr) {
    return [...new Set(arr)].sort((a,b) => b - a).slice(0,2)
  }