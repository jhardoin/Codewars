function repeats(arr){
    let obj = arr.reduce((a,b) => (a[b] = (a[b] || 0) + 1, a), {})
    return arr.filter(e => obj[e] == 1).reduce((a,b) => a + b, 0)
  }

  const repeats = arr => arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e)).reduce((a,b) => a + b, 0)

  const repeats = arr => arr.filter(e => arr.indexOf(e) == arr.lastIndexOf(e)).reduce((a,b) => a + b, 0)

  const repeats = arr => arr.filter(e => arr.indexOf(e) == arr.lastIndexOf(e)).reduce((a,b) => a + b, 0)

  const repeats = arr => arr.filter(e => arr.indexOf(e) == arr.lastIndexOf(e)).reduce((a,b) => a + b, 0)

  function repeats(arr){
    let a = [...new Set(arr)]
    return a.map(e => [e, arr.filter(el => el == e).length]).reduce((a,b) => a + (b[1] == 1 ? b[0] : 0), 0)
  };

  function repeats(arr){
    return arr.reduce((a,b) => a + (arr.indexOf(b) == arr.lastIndexOf(b) ? b : 0), 0)
  }

  function repeats(arr){
    return arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e)).reduce((a,b) => a + b, 0)
};

function repeats(arr){
  return arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e)).reduce((a,b) => a + b, 0)
};