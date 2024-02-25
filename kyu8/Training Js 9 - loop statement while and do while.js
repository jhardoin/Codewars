function padIt(str,n){
    let i = 0
    while(i < n) {
        if(i % 2 == 0){
          str = '*' + str;
          i++;
        }
        else{
          str = str + '*';
          i++;
        }
    }
    return str
  }


  function padIt(str,n){
    let str2 = [str]
    let i = 0
    while(i < n){
      i % 2 == 0 ? str2.unshift('*') : str2.push('*')
      i++
    }
    return str2.join('')
  }