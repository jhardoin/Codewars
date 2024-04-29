function isDivisible(...a){
    let b = a[0]
    a.shift()
    return a.every(e => b % e == 0)
  }