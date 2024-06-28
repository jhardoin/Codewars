function spinWords(string){
    let arr = string.split(' ')
    let mapped = arr.map(e => e.length >= 5 ? e.split('').reverse().join('') : e).join(' ')
    return mapped
  }

  const spinWords = string => string.split(' ').map(e => e.length >= 5 ? [...e].reverse().join('') : e).join(' ')

  const spinWords = string => string.split(' ').map(e => e.length >= 5 ? [...e].reverse().join('') : e).join(' ')

  function spinWords(string){
    return string.split(' ').map(e => e.length >= 5 ? [...e].reverse().join('') : e).join(' ')
  }

  function spinWords(string){
    return string.split(' ').map(e => e.length >= 5 ? [...e].reverse().join('') : e).join(' ')
   }

   function spinWords(string){
    return string.split(' ').map(e => e.length >= 5 ? [...e].reverse().join('') : e).join(' ')
}

function spinWords(string){
  return string.split(' ')
               .map(e => e.length > 4 ? [...e].reverse().join('') : e)
               .join(' ')
}

function spinWords(string){
  return string.split(' ').map(e => e.length > 4 ? [...e].reverse().join('') : e).join(' ')
}