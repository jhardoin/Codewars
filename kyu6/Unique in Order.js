const uniqueInOrder = iterable => {
    if(typeof iterable == 'string') return iterable.replace(/(.)\1+/g, '$1').split('')
    if(typeof iterable == 'object' && typeof iterable[0] !== 'number') return iterable.join('').replace(/(.)\1+/g, '$1').split('')
    else return (iterable.join('').replace(/(.)\1+/g, '$1')).split('').map(e => Number(e))
}

var uniqueInOrder=function(iterable){
    let result = []
    for(let i = 0; i < iterable.length; i++){
       if(iterable[i] !== iterable[i - 1]) result.push(iterable[i])
    }
     return result
  }

  var uniqueInOrder=function(iterable){
    return [...iterable].filter((e, i) => e !== iterable[i-1])
  }

  var uniqueInOrder=function(iterable){
    let arr = []
    for(let i = 0; i < iterable.length; i++){
      if(iterable[i] !== iterable [i + 1]) arr.push(iterable[i])
    }
    return arr
  }

  var uniqueInOrder=function(iterable){
    let arr = []
    for(let i = 0; i < iterable.length; i++){
      if(iterable[i] !== iterable[i + 1]) arr.push(iterable[i])
    }
    return arr
}

function uniqueInOrder(iterable){
  let arr = []
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i-1]) arr.push(iterable[i])
  }
  return arr
}

var uniqueInOrder=function(iterable){
  let arr = []
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i - 1]) arr.push(iterable[i])
  }
  return arr
}

var uniqueInOrder=function(x){
  let arr = []
  for(let i = 0; i < x.length; i++){
    if(x[i] !== x[i - 1]) arr.push(x[i])
  }
  return arr
}

var uniqueInOrder=function(iterable){
  let arr = []
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable [i - 1]) arr.push(iterable[i])
  }
  return arr
}