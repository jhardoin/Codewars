function pyramidHeight(n) {
    let blocks = 0,
        count = -1;
    for(let i = 1; blocks <= n; i++){
      blocks += i * i
      count++
    }
    return count
  }