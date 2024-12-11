function findShort(s){
    let numArry = s.split(' ').map(e => e.length);
    return Math.min(...numArry);
  }

  const findShort = s => Math.min(...s.split(' ').map(e => e.length))

  function findShort(s){
    return Math.min(...s.split(' ').map(e => e.length))
  }

  function findShort(s){
    return Math.min(...s.split(' ').map(e => e.length))
  }

  function findShort(s){
    let arr = s.split(' ')
    return arr.sort((a,b) => a.length - b.length)[0].length
  }

  function findShort(s){
    return s.split(' ').reduce((a,b) => b.length < a ? b.length : a, s.length)
}

function findShort(s){
  return s.split(' ').reduce((a,b) => b.length < a.length ? b : a).length
}

function findShort(s){
  return s.split(' ').reduce((a,b) => b.length < a.length ? b : a).length
}

function findShort(s){
  return s.split(' ').reduce((a,b) => b.length < a.length ? b : a).length
}