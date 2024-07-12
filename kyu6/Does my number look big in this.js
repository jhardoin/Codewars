function narcissistic(value) {
    return value === value.toString().split('').reduce((a, b) => a + Math.pow(+b, value.toString().length), 0);
}

function narcissistic(value) {
    return value.toString().split('').map((e,i,a) => e ** a.length).reduce((a,b) => a + b, 0) == value
} 

function narcissistic(value) {
    return value.toString().split('').reduce((a,b) => a + (b ** value.toString().length), 0) == value
  }
  

  function narcissistic(value) {
    let split = value.toString().split('')
    return split.reduce((a,b) => a + b ** split.length, 0) == value
  }
  

  function narcissistic(value) {
    return value == value.toString().split('').reduce((a,b) => a + (b ** value.toString().length), 0)
}


function narcissistic(value) {
  let x = value.toString().split('')
  return x.reduce((a,b) => a + (b ** value.toString().length), 0) == value
}