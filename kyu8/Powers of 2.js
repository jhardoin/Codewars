function powersOfTwo(n){
    const newArry = [];
    for (let i = 0; i <= n; i++) {
      newArry.push(Math.pow(2, i));
    }
    return newArry
  }