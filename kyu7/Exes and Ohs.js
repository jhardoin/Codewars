function XO(str) {
    let arrStr = str.toLowerCase().split('');
  
    return( (arrStr.filter(e => e === 'x').length) === (arrStr.filter(e => e === 'o').length) ) ? true : false
}

function XO(str) {
    return [...str].filter(e => e.toLowerCase() == 'x').length == [...str].filter(e => e.toLowerCase() == 'o').length
}

function XO(str) {
    return [...str].filter(e => e.toLowerCase() == 'o').length == [...str].filter(e => e.toLowerCase() == 'x').length
}