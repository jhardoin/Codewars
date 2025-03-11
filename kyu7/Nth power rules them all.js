function modifiedSum(a, n) {
    let multi = a.reduce((a,b,i) => a + (b ** n), 0)
    let sum = a.reduce((a,b) => a + b, 0)
    return multi - sum
  }

  function modifiedSum(a, n) {
    let multi = a.reduce((a,b,i) => a + (b ** n), 0)
    let sum = a.reduce((a,b) => a + b, 0)
    return multi - sum
  }