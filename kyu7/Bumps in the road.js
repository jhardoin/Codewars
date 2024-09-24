function bump(x){
    return x.replace(/_/g,'').length>15 ? 'Car Dead' : 'Woohoo!'
  }

  function bump(x, count = 0){
    [...x].map(e => e == 'n' ? count++ : e)
    return count <= 15 ? 'Woohoo!' : 'Car Dead'
  }

  function bump(x){
    return x.split('').filter(e => e === 'n').length <= 15 ? 'Woohoo!' : 'Car Dead'
}