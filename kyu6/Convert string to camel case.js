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
  
  