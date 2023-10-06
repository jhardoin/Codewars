const removeUrlAnchor = url => url.replace(/#.*/g, '')

function removeUrlAnchor(url){
    let arr = url.split('')
    let arr2 = []
    for(let i = 0; i < url.length; i++){
      if(arr[i] == '#') return arr2.join('')
      arr2.push(arr[i])
    }
    return arr2.join('')
  }