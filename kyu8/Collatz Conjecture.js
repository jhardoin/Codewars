var hotpo = function(n, acc = 0){
    if(n == 1) return acc
    else return hotpo(n % 2 ? 3*n + 1 : n/2, acc + 1)
}

var hotpo = function(n){
    if(n == 0) return 0
  let a = 0
  while(n != 1){
    n =  n % 2 !== 0 ? 3*n + 1 : n/2
    a++
  }
    return a
}