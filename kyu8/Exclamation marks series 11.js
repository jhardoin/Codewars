function replace(s){
    return s.replace(/[aeiou]/gi, '!')
  }

  function replace(s){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    return [...s].map(e => vowels.includes(e.toLowerCase()) ? '!' : e).join('')
  }