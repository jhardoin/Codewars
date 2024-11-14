const maxTriSum = n => [...new Set(n)].sort((a,b) => b - a).slice(0, 3).reduce((a,b) => a + b)

function maxTriSum(numbers){
    let a = [...new Set(numbers)].sort((a,b) => b - a)
    return a[0] + a[1] + a[2]
  }

  function maxTriSum(numbers){
    let a = [...new Set(numbers)].sort((a,b) => b - a)
    return a[0] + a[1] + a[2]
}

function maxTriSum(numbers){
  let a = [...new Set(numbers)].sort((a,b) => b - a)
  return a[0] + a[1] + a[2]
}