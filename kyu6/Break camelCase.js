const solution = string => [...string].map(e => e == e.toUpperCase() ? ' ' + e : e).join('')

function solution(string) {
    return [...string].map(e => e == e.toUpperCase() ? ' ' + e : e).join('')
  }

  function solution(string) {
    let arr = []
    for(let i = 0; i < string.length; i++){
      if(string[i] == string[i].toUpperCase()) arr.push(' ')
      arr.push(string[i])
    }
    return arr.join('')
  }

  function solution(string) {
    let arr = []
    for(let i = 0; i < string.length; i++){
      if(string[i] == string[i].toUpperCase()) arr.push(' ')
      arr.push(string[i])
    }
    return arr.join('')
  }

  function solution(string) {
    let s = ''
    for(let i = 0; i < string.length; i++){
      if(string[i] == string[i].toUpperCase()) s += ' '
      s += string[i]
    }
    return s
}


function solution(string) {
  let str = ''
  for(let i = 0; i < string.length; i++){
    if(string[i] == string[i].toUpperCase()) str += ' ' + string[i]
    else str += string[i]
  }
  return str
}

function solution(string) {
  let str = ''
  for(let i = 0; i < string.length; i++){
    if(string[i] == string[i].toUpperCase()) str += ' '
    str += string[i]
  }
  return str
}

function solution(string) {
  let str = ''
  for(let i = 0; i < string.length; i++){
    if(string[i] == string[i].toUpperCase()) str += ' '
    str += string[i]
  }
  return str
}

function solution(string) {
  let str = ''
  for(let i = 0; i < string.length; i++){
    if(string[i] == string[i].toUpperCase()) str += ' '
    str += string[i]
  }
  return str
}