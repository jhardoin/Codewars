const solution = d =>  Math.max( ...d.split('').map( (x,i,a)=> +(a.slice(i, i+5).join('')) ) )

function solution(digits){
    return +digits.split('').map((v,i,arr)=>arr.slice(i,i+5).join('')).sort((a,b)=>+b-+a)[0]
  }

  function solution(digits){
    return +digits.split('').map((e,i,a)=>a.slice(i,i+5).join('')).sort((a,b)=>+b-+a)[0]
  }

  function solution(digits){
    return +digits.split('').map((e,i,a)=>a.slice(i,i+5).join('')).sort((a,b)=>+b-+a)[0]
  }

  function solution(digits){
    return +digits.split('').map((e,i,a)=>a.slice(i,i+5).join('')).sort((a,b)=>+b-+a)[0]
  }

  function solution(digits){
    return +digits.split('').map((e,i,a)=>a.slice(i,i+5).join('')).sort((a,b)=>+b-+a)[0]
  }