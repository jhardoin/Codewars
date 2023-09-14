function powersOfTwo(n){
    const newArry = [];
    for (let i = 0; i <= n; i++) {
      newArry.push(Math.pow(2, i));
    }
    return newArry
  }

  function powersOfTwo(n){
    let result = []
    let counter = 1
    for(let i = 0; i < n + 1; i++){
      result.push(counter)
      counter *= 2
    }
    return result
  }