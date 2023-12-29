const reverseLetter = str => str.replace(/[^a-zA-Z]/g, '').split('').reverse().join('')

function reverseLetter(str) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let arr = []
    for(let i = 0; i < str.length; i++){
      if(letters.includes(str[i])) arr.push(str[i])
    }
    return arr.reverse().join('')
  }

  function reverseLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return [...str].filter(e => alphabet.includes(e)).reverse().join('')
  }