const numberToPower = (number, power) => (power < 1) ? power + 1 : Array.from({ length: power}).map(e => number).reduce((a,b) => a * b)

function numberToPower(number, power){
    let sum = 1 
    for(let i = 1; i <= power; i++){
      sum *= number
    }
    return sum
  }