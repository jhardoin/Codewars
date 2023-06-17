function findShort(s){
    let numArry = s.split(' ').map(e => e.length);
    return Math.min(...numArry);
  }