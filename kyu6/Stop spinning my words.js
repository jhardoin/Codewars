function spinWords(string){
    let arr = string.split(' ')
    let mapped = arr.map(e => e.length >= 5 ? e.split('').reverse().join('') : e).join(' ')
    return mapped
  }