function mergeArrays(arr1, arr2) {
    let newArry = arr1.concat(arr2).sort((a,b) => a - b);
    return [...new Set(newArry)]
  }