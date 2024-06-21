const alphabetPosition = (text) => [...text.replace(/[^a-z]/gi, '').toLowerCase()].map(e => e.charCodeAt() - 96).join(' ')

function alphabetPosition(text) {
    return [...text.split(' ').join('')].filter(e => parseInt(e, 36) - 9 > 0).map(e => parseInt(e, 36) - 9).join(' ')
  }

  function alphabetPosition(text) {
    return [...text].map(e => e == ' ' ? '' : e.toLowerCase().charCodeAt() - 96).filter(e => e > 0 && e < 27).join(' ')
  }

  function alphabetPosition(text) {
    return text.toLowerCase().split('').map(e => e.charCodeAt(0) - 96).filter(e => e > 0 && e < 27).join(' ')
  }

  function alphabetPosition(text) {
    return text.toLowerCase()
               .split('').map(e => e.charCodeAt(0) - 96)
               .filter(e => e > 0 && e < 27)
               .join(' ')
  }