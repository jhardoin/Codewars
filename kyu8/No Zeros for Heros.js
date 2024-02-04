const noBoringZeros = (n) => n === 0 ? 0 : parseInt(n.toString().replace(/0+$/, ''))

function noBoringZeros(n) {
    let arr = [...n.toString()]
    while(arr[arr.length - 1] == 0){
      arr.pop()
    }
    return +arr.join('')
  }

  function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
      n = n / 10
    }
    return n
  }

  function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
      n = n / 10
    }
    return n
  }