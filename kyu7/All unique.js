const hasUniqueChars = str => [...new Set(str)].join('') == str

function hasUniqueChars(str){
    return JSON.stringify([...str]) == JSON.stringify([...new Set([...str])])
  }

  function hasUniqueChars(str){
    return [...new Set(str)].length === str.length
}

function hasUniqueChars(str){
  return [...new Set(str)].length === str.length
}

function hasUniqueChars(str){
  return [...new Set(str)].length === str.length
}

function hasUniqueChars(str){
  return [...new Set(str)].length === str.length
}