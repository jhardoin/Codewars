function repeats(arr){
    let obj = arr.reduce((a,b) => (a[b] = (a[b] || 0) + 1, a), {})
    return arr.filter(e => obj[e] == 1).reduce((a,b) => a + b, 0)
  }

  const repeats = arr => arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e)).reduce((a,b) => a + b, 0)