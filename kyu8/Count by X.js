function countBy(x, n) {
    let z = [];
    for (let i =  1; i <= n; i++)
      z.push(x * i);
    return z;
  }

  function countBy(x, n) {
    let z = []
    for(let i = x; z.length < n; i += x){
      z.push(i)
    }
    return z;
  }

  const countBy = (x, n) => Array.from({length:n},(e,i) => x * (i + 1))

  const countBy = (x, n) => [...Array(n)].map((_,i) => (i+1) * x)

  function countBy(x, n) {
    return Array.from({length:n}, (e,i) => (i + 1) * x)
  }