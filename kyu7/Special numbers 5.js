function specialNumber(n){
    let special = ['0','1','2','3','4','5']
    return [...n.toString()].every(e => special.includes(e)) ? 'Special!!' : 'NOT!!'
  }

  
  function specialNumber(n){
    return n.toString().split('').every(e => '012345'.includes(e)) ? 'Special!!' : 'NOT!!'
}