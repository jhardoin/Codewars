function roundIt(n){
    let spl = n.toString().split(('.'))
    if(spl[0].length < spl[1].length) return Math.ceil(n)
    else if(spl[0].length > spl[1].length) return Math.floor(n)
    else return Math.round(n)
  }