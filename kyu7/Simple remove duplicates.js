const solve = arr => [...new Set(arr.reverse())].reverse()

function solve(arr) {
    return [...new Set(arr.reverse())].reverse()
  }

  function solve(arr) {
    let a = []
    for(let i = arr.length - 1; i >= 0; i--){
      if(!a.includes(arr[i])) a.unshift(arr[i])
    }
    return a
}

function solve(arr) {
  return [...new Set(arr.reverse())].reverse()
}
