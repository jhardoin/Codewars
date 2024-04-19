const solution = string => [...string].map(e => e == e.toUpperCase() ? ' ' + e : e).join('')

function solution(string) {
    return [...string].map(e => e == e.toUpperCase() ? ' ' + e : e).join('')
  }