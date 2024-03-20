function removeDuplicateWords (s) {
    let obj = new Set(s.split(' '))
    return Array.from(obj).join(' ')
  }

  function removeDuplicateWords (s) {
    return [...new Set(s.split(' '))].join(' ')
  }