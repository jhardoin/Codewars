function automorphic(n){
    let next = n.toString()
    let n2 = (n**2).toString()
    return next.charAt(next.length - 1) == n2.charAt(n2.length - 1) ? "Automorphic" : 'Not!!'
  }