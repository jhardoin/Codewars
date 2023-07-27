function removeDuplicateWords (s) {
    let obj = new Set(s.split(' '))
    return Array.from(obj).join(' ')
  }