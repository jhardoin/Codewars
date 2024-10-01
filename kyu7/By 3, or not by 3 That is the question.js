function divisibleByThree(str){
    return Number.isInteger(str.split('').reduce((a,b) => (+a + +b)) / 3)
  }

  function divisibleByThree(str){
    return str.split('').reduce((a,b) => +b + a, 0) % 3 === 0
}