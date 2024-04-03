const hasUniqueChars = str => [...new Set(str)].join('') == str

function hasUniqueChars(str){
    return JSON.stringify([...str]) == JSON.stringify([...new Set([...str])])
  }