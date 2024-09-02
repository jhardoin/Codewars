function toWeirdCase(string) {
    return string.split(' ').map(word => {
      return word.split('').map((e, i) => {
        return i % 2 === 0 ? e.toUpperCase() : e.toLowerCase();
      }).join('')
    }).join(' ')
  }

  function toWeirdCase(string) {
    return string.split(' ')
                 .map(word => word.split('').map((e, i) => i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join(''))
                 .join(' ')
  }

  function toWeirdCase(string){
    return string.split(' ').map(word => [...word].map((e,i) => i % 2 == 0 ? e.toUpperCase() : e.toLowerCase()).join('')).join(' ')
}

function toWeirdCase(string){
  return string.split(' ').map(word => [...word].map((e,i) => i % 2 == 0 ? e.toUpperCase() : e.toLowerCase()).join('')).join(' ')
}

function toWeirdCase(string){
  return string.split(' ').map(word => word.split('').map((e,i) => i % 2 == 0 ? e.toUpperCase() : e.toLowerCase()).join('')).join(' ')
}

function toWeirdCase(string){
  return string.split(' ').map(e => [...e].map((el,i) => i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('')).join(' ')
}