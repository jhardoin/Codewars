function tidyNumber(n){
    let arr = n.toString().split('')
    let sorted = n.toString().split('').sort((a,b) => a - b)
    
    return arr.every((v, i) => v === sorted[i])
  }