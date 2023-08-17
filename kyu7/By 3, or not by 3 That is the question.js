function divisibleByThree(str){
    return Number.isInteger(str.split('').reduce((a,b) => (+a + +b)) / 3)
  }