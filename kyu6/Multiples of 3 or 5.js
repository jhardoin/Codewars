const solution = n => Array.from({length:n - 1}, (e,i) => i + 1).filter(e => !(e % 3) || !(e % 5)).reduce((a,b)=> a + b, 0)

function solution(number){
    return Array.from({length:number - 1}, (_,i) => i + 1)
      .filter(e => !(e % 3) || !(e % 5))
      .reduce((a,b) => a + b, 0)
  }