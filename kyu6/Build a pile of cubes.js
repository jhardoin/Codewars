function findNb(m) {
    let totalVolume = 0
    let n = 0
  
    while (totalVolume < m) {
      n += 1
      totalVolume += Math.pow(n, 3)
    }
  
    return totalVolume === m ? n : -1
  }
  
  function findNb(m) {
    let total = 0
    let i = 0
    while(total < m ){
      i += 1
      total = total + Math.pow(i, 3)
    }
    return total == m ? i : -1
}


function findNb(m) {
    let total = 0
    let n = 0
    while(total < m){
      n++
      total = total + Math.pow(n, 3)
    }
    return total == m ? n : -1
}
