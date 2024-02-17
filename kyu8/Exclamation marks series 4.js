function remove(s){
    return s.replace(/!/g, '') + "!"
  }

  function remove (string) {
    return [...string].filter(e => e != '!').join('') + '!'
  }