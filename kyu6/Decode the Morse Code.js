decodeMorse = function(morseCode){
    morseCode = morseCode.trim()
    const words = morseCode.split('   ')
    const decodedWords = words.map(e => e.split(' ').map(symbol => MORSE_CODE[symbol]).join('')
    )
  
    return decodedWords.join(' ')
  }
  