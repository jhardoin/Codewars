function findNb(m) {
    let totalVolume = 0
    let n = 0
  
    while (totalVolume < m) {
      n += 1
      totalVolume += Math.pow(n, 3)
    }
  
    return totalVolume === m ? n : -1
  }
  