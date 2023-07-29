function vowelIndices(word){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let arr = word.toLowerCase().split('').map((e, i) => (vowels.includes(e) ? i + 1 : -1))
    return arr.filter(e => e !== -1)
  }