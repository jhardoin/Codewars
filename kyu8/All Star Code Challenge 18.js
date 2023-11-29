function strCount(str, letter){  
    return str.split(letter).length - 1
  }

  function strCount(str, letter){  
    let count = 0
    for(let i = 0; i < str.length; i++){
      if(str[i] == letter) count++
    }
    return count
  }

  const strCount = (str, letter) => [...str].filter(e => e == letter).length

  function strCount(str, letter){  
    return str.split(letter).length - 1
  }