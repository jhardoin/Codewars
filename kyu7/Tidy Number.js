function tidyNumber(n){
    let arr = n.toString().split('')
    let sorted = n.toString().split('').sort((a,b) => a - b)
    
    return arr.every((v, i) => v === sorted[i])
  }

  function tidyNumber(n){
    return n == +[...n.toString()].sort((a,b) => a - b).join("")
  }

  function tidyNumber(n){
    return n == +[...n.toString()].sort((a,b) => a - b).join("")
  }