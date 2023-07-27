function fizzbuzz(n){
    let arr = Array.from({ length: n }, (v, i) => i + 1);
    return arr.map(e => e % 15 == 0 ? 'FizzBuzz' : e % 5 == 0 ? 'Buzz' : e % 3 == 0 ? 'Fizz' : e )
  }
  