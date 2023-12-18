function sumMul(n,m){
    if(n >= m || n < 1 || m < 1) return 'INVALID';
    let solution = 0
    for(let i = n; i < m; i += n){
       solution += i;
      }
    return solution
  }

  function sumMul(n,m){
    return m/n > 0 ? Array.from( {length:Math.floor((m-1)/n)} , (e,i) => (i + 1) * n).reduce((a,b)=>a+b, 0) : 'INVALID'
  }