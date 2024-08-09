function sumDigPow(a, b) {
    let arr = Array.from({ length: b - a + 1 }, (e, i) => a + i)
    return arr.filter(e => {
      return e === e
        .toString()
        .split('')
        .reduce((a, b, i) => a + Math.pow(Number(b), i + 1), 0)
    })
  }

  function sumDigPow(a, b) {
    let found = []
    for(let i = a; i <= b; i++){
      if(i === i.toString().split('').reduce((a,n,i)=> a + n ** (i + 1), 0)){
        found.push(i)
      }
    }
    return found
  }

  function sumDigPow(a, b) {
    let arr = []
    for(let i = a; i <= b; i++){
      if(i == i.toString().split('').reduce((ax,bx,i) => ax + bx ** (i + 1), 0)) arr.push(i)
    }
    return arr
}

function sumDigPow(a, b) {
  let arr = []
  for(let i = a; i <= b; i++){
    if(i == i.toString().split('').reduce((ax,bx,ind) => ax + bx ** (ind + 1), 0)) arr.push(i)
  }
  return arr
}


function sumDigPow(a, b) {
  let arr = []
  for(let i = a; i < b; i++){
    if(i == i.toString().split('').reduce((ax,bx,ind) => ax + bx ** (ind + 1), 0)) arr.push(i)
  }
  return arr
}


function sumDigPow(a, b) {
  let arr = []
  for(let i = a; i <= b; i++){
    if(i == i.toString().split('').reduce((ax,bx,ind) => ax + bx ** (ind + 1), 0)) arr.push(i)
  }
  return arr
}

function sumDigPow(a, b) {
  let arr = []
  for(let i = a; i <= b; i++){
    if(i == i.toString().split('').reduce((ax,bx,ix) => ax + bx ** (ix + 1), 0)) arr.push(i)
  }
  return arr
}

function sumDigPow(a, b) {
  let arr = []
  for(let i = a; i <= b; i++){
    if(i == i.toString().split('').reduce((ax, bx, ix) => ax + bx ** (ix + 1), 0)) arr.push(i)
  }
  return arr
}
