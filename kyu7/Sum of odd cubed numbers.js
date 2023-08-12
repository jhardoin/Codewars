function cubeOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        return undefined
      }
    }
  
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] ** 3) % 2 !== 0) {
        arr2.push(arr[i] ** 3)
      }
    }
    return arr2.reduce((a, b) => a + b, 0)
  }