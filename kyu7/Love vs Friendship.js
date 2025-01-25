const wordsToMarks = s => s.split('').map(e => e.charCodeAt(0) - 96).reduce((a,b) => a + b)

function wordsToMarks(string){
    return [...string].map(e => e.charCodeAt() - 96).reduce((a,b) => a + b, 0)
  }

  function wordsToMarks(string){
    return string.split('').reduce((a,b) => a + (b.charCodeAt() - 96), 0)
}

function wordsToMarks(string){
  return string.split('').reduce((a,b) => a + (b.charCodeAt() - 96), 0)
}