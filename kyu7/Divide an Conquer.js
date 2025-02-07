function divCon(x){
    let int = x.filter(e => typeof e == 'number').reduce((a,b) => a + b, 0)
    let str = x.filter(e => typeof e == 'string').map(e => Number(e)).reduce((a,b) => a + b, 0)
    return int - str
  }

  function divCon(x){
    let nums = x.filter(e => typeof e == 'number').reduce((a,b) => a + b, 0)
    let string = x.filter(e => typeof e == 'string').reduce((a,b) => a + +b, 0)
    return nums - string
  }

  function divCon(x){
    let sum = 0
    x.forEach(e => typeof e === 'number' ? sum += e : sum -= +e)
    return sum
}

function divCon(x){
  let count = 0
  x.forEach(e => typeof e === 'number' ? count += e : count -= +e)
  return count
}

function divCon(x){
  let count = 0
  x.forEach(e => typeof e === 'number' ? count += e : count -= +e)
  return count
}

function divCon(x){
  let count = 0
  x.forEach(e => typeof e === 'number' ? count += e : count -= +e)
  return count
}