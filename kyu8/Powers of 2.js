function powersOfTwo(n){
    const newArry = [];
    for (let i = 0; i <= n; i++) {
      newArry.push(Math.pow(2, i));
    }
    return newArry
  }

  function powersOfTwo(n){
    let result = []
    let counter = 1
    for(let i = 0; i < n + 1; i++){
      result.push(counter)
      counter *= 2
    }
    return result
  }

  function powersOfTwo(n){
    let result = []
    for(let i = 0, j = 1; i < n + 1; i++){
      result.push(j)
      j *= 2
    }
    return result
  }

  function powersOfTwo(n){
    return Array.from({length:n+1},(e,i) => 2 ** i)
  }

  function powersOfTwo(n){
    return Array.from({length:n + 1}, (e,i) => 2 ** i)
  }

  function powersOfTwo(n){
    return Array.from({length: n + 1}, (_,i) => 2 ** i)
  }

  function powersOfTwo(n){
    return Array.from({length: n + 1}, (_,i) => 2 ** i)
  }

  function powersOfTwo(n){
    return Array.from({length: n + 1}, (_,i) => 2 ** i)
  }

  function powersOfTwo(n){
    return Array.from({length: n + 1}, (_,i) => 2 ** i)
  }