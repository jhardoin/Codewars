function fakeBin(x){
    return x.split('').map(item => item >= 5 ? 1 : 0).join('');
  }

  function fakeBin(x){
    let result = []
    for(let i = 0; i < x.length; i++){
      if(x[i] < 5) result.push(0)
      else result.push(1)
    }
    return result.join('')
  }

  const fakeBin = x => [...x].map(e => e < 5 ? 0 : 1).join('')

  const fakeBin = x => [...x].map(e => e < 5 ? 0 : 1).join('')

  function fakeBin(x){
    return [...x].map(e => e < 5 ? '0' : '1').join('')
  }

  function fakeBin(x){
    return [...x].map(e => e < 5 ? '0' : '1').join('')
  }

  function fakeBin(x){
    return [...x].map(e => e < 5 ? '0' : '1').join('')
  }