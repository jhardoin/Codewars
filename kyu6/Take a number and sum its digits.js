function sumDigPow(a, b) {
    let arr = Array.from({ length: b - a + 1 }, (e, i) => a + i)
    return arr.filter(e => {
      return e === e
        .toString()
        .split('')
        .reduce((a, b, i) => a + Math.pow(Number(b), i + 1), 0)
    })
  }

  function sumDigPow(a, b) {
    let found = []
    for(let i = a; i <= b; i++){
      if(i === i.toString().split('').reduce((a,n,i)=> a + n ** (i + 1), 0)){
        found.push(i)
      }
    }
    return found
  }