function sumDigits(number) {
    return Math.abs(number).toString().split('').map(e => Number(e)).reduce((a,b) => a+b)
  }

  const sumDigits = number => [...Math.abs(number).toString()].reduce((a,b) => +a + +b, 0)

  function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((a,b) => +a + +b, 0);
  }

  function sumDigits(number) {
    return [...Math.abs(number).toString()].reduce((a,b) => a + +b, 0)
  } 
  

  function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((a,b) => +b + a, 0)
}


function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce((a,b) => +b + a, 0)
}
