function bump(x){
    return x.replace(/_/g,'').length>15 ? 'Car Dead' : 'Woohoo!'
  }