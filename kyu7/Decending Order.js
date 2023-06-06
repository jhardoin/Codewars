function descendingOrder(n){
    let solution = n.toString().split('').sort((a,b) => a - b).reverse().join('')
    return parseInt(solution)
   }