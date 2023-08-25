function datingRange(age){
    let min = 0
    let max = 0
    let a = Math.abs(age)
    if(age <= 14){
      min = Math.floor(a - (.1 * a))
      max = Math.floor(a + (.1 * a))
    }
    else{
      min = Math.floor(a/2 + 7)
      max = Math.floor((a - 7) * 2)
    }
    
    return min + '-' + max
  }