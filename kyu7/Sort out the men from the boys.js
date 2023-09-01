function menFromBoys(arr){
    let odd = [...new Set(arr.filter(e => e % 2))].sort((a,b) => b - a)
    let even = [...new Set(arr.filter(e => e % 2 == 0))].sort((a,b) => a - b)
    return even.concat(odd)
  }