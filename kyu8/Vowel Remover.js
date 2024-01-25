function shortcut (string) {
    return string.replace(/[aeiou]/gi, '')
  }

  function shortcut (string) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let result = []
    for(let i = 0; i < string.length; i++){
      if(!vowels.includes(string[i])) result.push(string[i])
    }
    return result.join('')
  }

  function shortcut (string) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    return [...string].filter(e => !vowels.includes(e)).join('')
  }

  function shortcut (string) {
    return [...string].filter(e => !'aeiou'.includes(e)).join('')
  }