function sumMul(n,m){
    if(n >= m || n < 1 || m < 1) return 'INVALID';
    let solution = 0
    for(let i = n; i < m; i += n){
       solution += i;
      }
    return solution
  }