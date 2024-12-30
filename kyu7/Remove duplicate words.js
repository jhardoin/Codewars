function removeDuplicateWords (s) {
    let obj = new Set(s.split(' '))
    return Array.from(obj).join(' ')
  }

  function removeDuplicateWords (s) {
    return [...new Set(s.split(' '))].join(' ')
  }

  function removeDuplicateWords (s) {
    let arr = []
    s.split(' ').forEach(e => !arr.includes(e) ? arr.push(e) : e)
    return arr.join(' ')
}

function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ')
}

function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ')
}

function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ')
}