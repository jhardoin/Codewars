function descendingOrder(n){
    let solution = n.toString().split('').sort((a,b) => a - b).reverse().join('')
    return parseInt(solution)
   }

   const descendingOrder = n => +[...n.toString()].sort((a,b) => b - a).join('')

   const descendingOrder = n => +[...String(n)].sort((a,b) => +b - +a).join('')

   function descendingOrder(n){
    return +[...String(n)].sort((a,b) => b - a).join('')
}

function descendingOrder(n){
    return +[...n.toString()].sort((a,b) => b - a).join('')
}

function descendingOrder(n){
    return +n.toString().split('').sort().reverse().join('')
  }