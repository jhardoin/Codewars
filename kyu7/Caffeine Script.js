function caffeineBuzz(n){
    let arr = []
    if(n % 3 == 0 && n % 4 == 0) arr.push('Coffee')
    if(n % 3 == 0 && n % 12 !== 0) arr.push('Java')
    if((n % 3 == 0 || n % 4 == 0) && n % 2 == 0 && arr.length !== 0) arr.push('Script')
    if(arr.length == 0) arr.push('mocha_missing!')
    return arr.join('')
  }

  function caffeineBuzz(n){
    let result = '';
    if (n % 3 === 0) {
      result += 'Java';
      if (n % 4 === 0) result += 'Script';
    } else if (n % 12 === 0) {
      result = 'Coffee';
      if (n % 2 === 0) result += 'Script';
    } else {
      result = 'mocha_missing!';
    }
    return result;
  }