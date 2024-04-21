function sumDigPow(a, b) {
    let arr = Array.from({ length: b - a + 1 }, (e, i) => a + i)
    return arr.filter(e => {
      return e === e
        .toString()
        .split('')
        .reduce((a, b, i) => a + Math.pow(Number(b), i + 1), 0)
    })
  }