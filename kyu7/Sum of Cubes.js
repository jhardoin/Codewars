const sumCubes = n => Array.from({length: n}, (v,i) => i + 1).map(e => e ** 3).reduce((a,b) => a+b)

function sumCubes(n){
    return Array.from({length : n + 1}, (e,i) => i ** 3).reduce((a,b) => a + b, 0)
  }




  function sumCubes(n){
    let total = 0
    for(let i = 1; i <= n; i++){
      total += i ** 3
    }
    return total
}

function sumCubes(n){
  return Array.from({length: n}, (_,i) => (i + 1) ** 3).reduce((a,b) => a + b, 0)
}