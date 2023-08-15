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