function alternateCase(s) {
    let result = []
    for(let i = 0; i < s.length; i++){
      if(s[i] == s[i].toUpperCase()) result.push(s[i].toLowerCase())
      else result.push(s[i].toUpperCase())
    }
    return result.join('')
  }