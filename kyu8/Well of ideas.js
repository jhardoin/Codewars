function well(x){
    let numOfGoods = x.filter(e => e.match('good')).length;
     if(numOfGoods > 2) return 'I smell a series!';
     if(numOfGoods > 0) return 'Publish!'
     else return 'Fail!'
   }