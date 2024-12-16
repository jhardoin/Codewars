function alternateCase(s) {
    let result = []
    for(let i = 0; i < s.length; i++){
      if(s[i] == s[i].toUpperCase()) result.push(s[i].toLowerCase())
      else result.push(s[i].toUpperCase())
    }
    return result.join('')
  }

  function alternateCase(s) {
    return [...s].map(e => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
  }

  function alternateCase(s) {
    return [...s].map(e => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
  }