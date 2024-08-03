function toCamelCase(str){
    let arr = (str.replace(/[^a-zA-Z]/g, ' ').split(' '))
    let camelArr = arr.map((e) => e == arr[0]  ? e : e[0].toUpperCase() + e.slice(1)) 
    return camelArr.join('')
  }

  function toCamelCase(str){
    if(str.length == 0) return ''
    let j = str.replace(/[_-]/g, ' ').split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('')
    return str[0] + j.slice(1)
  }

  function toCamelCase(str){
    if (str.length == 0) return ''
    return str.split(/[-_]/).map((e,i) => i == 0 ? e : e[0].toUpperCase() + e.slice(1)).join('')
  }
  
  function toCamelCase(str) {
    let camelCaseStr = ''
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '_' || str[i] === '-') {
        camelCaseStr += str[i + 1].toUpperCase()
        i++
      } else {
        camelCaseStr += str[i]
      }
    }
    return camelCaseStr
  }

  function toCamelCase(str){
    let s = ''
    for(let i = 0; i < str.length; i++){
      if(str[i] == '_' || str[i] == '-') {
        s += (str[i + 1].toUpperCase())
        i++
      } else {
        s += str[i]
      }

    }
    return s
}

function toCamelCase(str){
  let arr = []
  for(let i = 0; i < str.length; i++){
    if(str[i] == '-' || str[i] == '_'){
      arr.push(str[i + 1].toUpperCase())
      i++
    } else {
      arr.push(str[i])
    }
  }
  return arr.join('')
}

function toCamelCase(str){
  let s = ''
  for(let i = 0; i < str.length; i++){
    if(str[i] == '_' || str[i] == '-'){
      s += str[i + 1].toUpperCase()
      i++
    } else {
      s += str[i]
    }
  }
  return s
}

function toCamelCase(str){
  let s = ''
  for(let i = 0; i < str.length; i++){
    if(str[i] == '-' || str[i] == '_'){
      s += str[i + 1].toUpperCase()
      i++
    } else s += str[i]
  }
  return s
}

function toCamelCase(str){
  let s = ''
  for(let i = 0; i < str.length; i++){
    if(str[i] == '_' || str[i] == '-'){
      s += str[i + 1].toUpperCase()
      i++
    }else s += str[i]
  }
  return s
}