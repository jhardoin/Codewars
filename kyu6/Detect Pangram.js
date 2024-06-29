function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerStr = string.toLowerCase();
    const missingLetters = alphabet.split('').filter(l => !lowerStr.includes(l));
    return missingLetters.length === 0;
  }

  const isPangram = s => Array.from(new Set(s.toLowerCase().replace(/[^a-z]/g, ''))).length == 26

  const isPangram = s => {
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
     return new Set([...s.split(' ').join('').toLowerCase()].filter(e => letters.includes(e))).size == 26
  }

  function isPangram(string){
    let a = 'abcdefghijklmnopqrstuvwxyz'
    return [...new Set([...string.toLowerCase()].filter(e => a.includes(e)))].length == 26
  }

  function isPangram(string){
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    return [...new Set(string.toLowerCase().split('').filter(e => letters.includes(e)))].length == 26
  }

  function isPangram(string){
    return [...new Set([...string.toLowerCase()].filter(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e)))].length == 26
  }

  function isPangram(string){
    let a = string.toLowerCase().split('')
    let b = [...new Set(a)].filter(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e))
    return b.length == 26
}

function isPangram(string){
  return [...new Set(string.toLowerCase().split('').filter(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e)))].length == 26
}