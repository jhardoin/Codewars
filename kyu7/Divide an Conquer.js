function divCon(x){
    let int = x.filter(e => typeof e == 'number').reduce((a,b) => a + b, 0)
    let str = x.filter(e => typeof e == 'string').map(e => Number(e)).reduce((a,b) => a + b, 0)
    return int - str
  }