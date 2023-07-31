function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerStr = string.toLowerCase();
    const missingLetters = alphabet.split('').filter(l => !lowerStr.includes(l));
    return missingLetters.length === 0;
  }

  const isPangram = s => Array.from(new Set(s.toLowerCase().replace(/[^a-z]/g, ''))).length == 26