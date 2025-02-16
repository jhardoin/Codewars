function pattern(n){
    let result = []
    for (let i = 1 ; i <= n; i++){
      result.push(i.toString().repeat(i))
    }
    return result.join('\n')
}

function pattern(n){
  return n < 1 ? '' : Array.from({length:n}, (e,i) => i + 1).map(e => e.toString().repeat(e)).join('\n')
}

function pattern(n){
  return n < 1 ? '' : Array.from({length:n}, (e,i) => i + 1).map(e => e.toString().repeat(e)).join('\n')
}