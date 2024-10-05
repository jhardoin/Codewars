function squares(x, n) {
    if(n <= 0) return []
    return Array.from({length:n}, (_, i) => i === 0 ? x : x *= x)
  }

  
  function squares(x, n) {
    let arr = []
    for(let i = x; arr.length < n; i **= 2){
      arr.push(i)
    }
    return arr

}