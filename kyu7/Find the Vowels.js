function vowelIndices(word){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let arr = word.toLowerCase().split('').map((e, i) => (vowels.includes(e) ? i + 1 : -1))
    return arr.filter(e => e !== -1)
  }

  function vowelIndices(word){
    return [...word].map((e,i) => 'aeiouyAEIOUY'.includes(e) ? i + 1 : -1).filter(e => e > 0)
  }

  function vowelIndices(word){
    return word.toLowerCase().split('').map((e,i) => 'aeiouy'.includes(e) ? i + 1 : '').filter(e => typeof e === 'number')
}

function vowelIndices(word){
  return word.toLowerCase().split('').map((e,i) => 'aeiouy'.includes(e) ? i + 1 : '').filter(e => e !== '')
}

function vowelIndices(word){
  let arr = []
  for(let i = 0; i < word.length; i++){
    if('aeiouyAEIOUY'.includes(word[i])) arr.push(i + 1)
  }
  return arr
}

function vowelIndices(word){
  let arr = []
  for(let i = 0; i < word.length; i++){
    if('aeiouyAEIOUY'.includes(word[i])) arr.push(i + 1)
  }
  return arr
}
