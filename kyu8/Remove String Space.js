function noSpace(x){
    return x.replace(/\s/g, '')
   }

   const noSpace = x => x.split(' ').join('')

   function noSpace(x){
    let arr = []
    for(let i = 0; i < x.length; i++){
      if(x[i] !== ' ') arr.push(x[i])
    }
    return arr.join('')
  }

  const noSpace = x => x.split(' ').join('')

  function noSpace(x){
    return x.split(' ').join('')
  }

  function noSpace(x){
    return [...x].filter(e => e !== ' ').join('')
}