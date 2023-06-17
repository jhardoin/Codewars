function XO(str) {
    let arrStr = str.toLowerCase().split('');
  
    return( (arrStr.filter(e => e === 'x').length) === (arrStr.filter(e => e === 'o').length) ) ? true : false
}