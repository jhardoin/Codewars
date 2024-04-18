function moveZeros(arr) {
    let solution = [];
    let zeros = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0 && arr[i] !== false && arr[i] !== null) {
        zeros.push(arr[i]);
      } else {
        solution.push(arr[i]);
      }
    }
  
    return solution.concat(zeros);
  }

  function moveZeros(arr) {
    let arr1 = []
    let arr2 = []
    arr.forEach(e => e === 0 ? arr2.push(e) : arr1.push(e))
    return arr1.concat(arr2)
  }

  function moveZeros(arr) {
    let zero = arr.filter(e => e === 0)
    return arr.filter(e => e !== 0).concat(zero)
  }