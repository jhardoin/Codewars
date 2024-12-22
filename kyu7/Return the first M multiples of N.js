function multiples(m, n){
    return Array.from({length:m}, (_, i) => (i + 1) * n)
  }

  function multiples(m, n){
    let arr = []
    for(let i = n; arr.length < m; i += n){
      arr.push(i)
    }
    return arr
}

function multiples(m, n){
  let arr = []
  for(let i = n; arr.length < m; i += n){
    arr.push(i)
  }
  return arr
}