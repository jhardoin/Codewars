function consonantCount(str) {
    let letters = str.replace(/[^a-zA-Z]/g, '')
    return letters.replace(/[aeiou]/gi, '').length
  }