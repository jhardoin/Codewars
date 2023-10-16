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