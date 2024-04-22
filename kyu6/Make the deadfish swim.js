function parse( data ){
    let value = 0
    let arr = []
    data.split('').map(e => e == 'i' ? value++ : e == 'd' ? value-- : e == 's' ? value *= value : e == 'o' ? arr.push(value) : e)
    return arr
  }
  