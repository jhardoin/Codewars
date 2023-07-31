function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerStr = string.toLowerCase();
    const missingLetters = alphabet.split('').filter(l => !lowerStr.includes(l));
    return missingLetters.length === 0;
  }