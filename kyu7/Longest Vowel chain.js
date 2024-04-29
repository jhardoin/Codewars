function solve(s){
    return Math.max(...[...s].map(e => 'aeiou'.includes(e) ? e : ' ').join('').split(' ').map(e => e.length))
   }