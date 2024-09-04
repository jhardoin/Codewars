function isIsogram(str) {
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i].toLowerCase() === str[j].toLowerCase()) {
          return false
        }
      }
    }
    return true
  }

  const isIsogram = str => str.length == [...new Set(str.toLowerCase())].length

  function isIsogram(str){
    return str.length == [...new Set(str.toLowerCase())].length
}

function isIsogram(str){
  return [...new Set(str.toLowerCase())].length == str.length
}

function isIsogram(str){
  return str.toLowerCase().length == [...new Set(str.toLowerCase())].length
}

function isIsogram(str){
  return [...new Set(str.toLowerCase())].length == str.length
}

function isIsogram(str){
  return str.length === [...new Set(str.toLowerCase())].length
}