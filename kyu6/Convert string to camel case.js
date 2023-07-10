function toCamelCase(str){
    let arr = (str.replace(/[^a-zA-Z]/g, ' ').split(' '))
    let camelArr = arr.map((e) => e == arr[0]  ? e : e[0].toUpperCase() + e.slice(1)) 
    return camelArr.join('')
  }