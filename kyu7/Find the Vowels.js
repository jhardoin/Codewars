function vowelIndices(word){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let arr = word.toLowerCase().split('').map((e, i) => (vowels.includes(e) ? i + 1 : -1))
    return arr.filter(e => e !== -1)
  }

  function vowelIndices(word){
    return [...word].map((e,i) => 'aeiouyAEIOUY'.includes(e) ? i + 1 : -1).filter(e => e > 0)
  }