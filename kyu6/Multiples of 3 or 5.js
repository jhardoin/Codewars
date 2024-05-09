const solution = n => Array.from({length:n - 1}, (e,i) => i + 1).filter(e => !(e % 3) || !(e % 5)).reduce((a,b)=> a + b, 0)

function solution(number){
    return Array.from({length:number - 1}, (_,i) => i + 1)
      .filter(e => !(e % 3) || !(e % 5))
      .reduce((a,b) => a + b, 0)
  }

  const solution = number => number < 0 ? 0 : [...new Array(Math.abs(number)).keys()].filter(e => e % 3 == 0 || e % 5 == 0).reduce((a,b) => a + b, 0)

  function solution(number){
    if(number < 0) return 0
    return Array.from({length: number}, (e,i) => i)
           .filter(e => e % 3 == 0 || e % 5 == 0)
           .reduce((a,b) => a + b, 0)
  }

  function solution(number){
    return Array.from({length:number - 1}, (_,i) => i + 1)
           .filter(e => e % 3 == 0 || e % 5 == 0).reduce((a,b) => a + b, 0)
}