function evenChars(string) {
    if(string.length < 2 || string.length > 100) return 'invalid string'
    else return string.split('').filter((e, i) => i % 2)
  }