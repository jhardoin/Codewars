const reverseSeq = n => {
    let solution = [];
    for(let i = n; i > 0; i--){
      solution.push(i)
    }
    return solution;
  }

  const reverseSeq = n => Array.from({length:n}, (_, i) => i+1).reverse()

  const reverseSeq = n => Array.from({length:n}, (e,i) => i + 1).reverse()

  const reverseSeq = n => Array.from({length:n}, (_,i) => i + 1).reverse()

  const reverseSeq = n => {
    return Array.from({length:n}, (e,i) => i + 1).reverse()
  }

  const reverseSeq = n => {
    return Array.from({length:n}, (_,i) => n--)
  }