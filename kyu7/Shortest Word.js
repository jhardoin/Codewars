function findShort(s){
    let numArry = s.split(' ').map(e => e.length);
    return Math.min(...numArry);
  }

  const findShort = s => Math.min(...s.split(' ').map(e => e.length))

  function findShort(s){
    return Math.min(...s.split(' ').map(e => e.length))
  }