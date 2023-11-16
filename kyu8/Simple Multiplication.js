function simpleMultiplication(number) {
    if(number % 2 === 0){
      return number * 8;
    }
    else {
      return number * 9;
    }
}


const simpleMultiplication = number => (number % 2) ? number * 9 : number * 8

const simpleMultiplication = number => number % 2 ? number * 9 : number * 8

const simpleMultiplication = number => number % 2 ? number * 9 : number * 8