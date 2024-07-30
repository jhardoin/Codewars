function parse( data ){
    let value = 0
    let arr = []
    data.split('').map(e => e == 'i' ? value++ : e == 'd' ? value-- : e == 's' ? value *= value : e == 'o' ? arr.push(value) : e)
    return arr
  }
  
  function parse( data ){
    let n = 0
    let arr = []
    data.split('').forEach(e => e == 'i' ? n++ : e == 'd' ? n-- : e == 's' ? n *= n : e == 'o' ? arr.push(n) : e)
    return arr
}
