function digitalRoot(n) {
    let sumOfN = (n.toString().split('')).map(e => parseInt(e)).reduce((a,b) => a + b);
    let secSum = (sumOfN.toString().split('')).map(e => parseInt(e)).reduce((a,b) => a + b);
    let thrSum = (secSum.toString().split('')).map(e => parseInt(e)).reduce((a,b) => a + b);
    
    if(sumOfN < 10) return sumOfN
    if(secSum < 10) return secSum
    if(thrSum < 10) return thrSum
    else return n
  }

  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }

  function digital_root(n) {
    return--n%9+1;
  }