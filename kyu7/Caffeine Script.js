function caffeineBuzz(n){
    let arr = []
    if(n % 3 == 0 && n % 4 == 0) arr.push('Coffee')
    if(n % 3 == 0 && n % 12 !== 0) arr.push('Java')
    if((n % 3 == 0 || n % 4 == 0) && n % 2 == 0 && arr.length !== 0) arr.push('Script')
    if(arr.length == 0) arr.push('mocha_missing!')
    return arr.join('')
  }