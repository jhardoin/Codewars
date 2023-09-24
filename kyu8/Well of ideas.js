function well(x){
    let numOfGoods = x.filter(e => e.match('good')).length;
     if(numOfGoods > 2) return 'I smell a series!';
     if(numOfGoods > 0) return 'Publish!'
     else return 'Fail!'
   }

   function well(x){
    let filtered = x.filter(e=> e=='good').length
    return filtered > 2 ? 'I smell a series!' : filtered > 0 ? 'Publish!' : 'Fail!'
  }