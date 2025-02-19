function calc(x){
    let total1 = '';
    let total2 = '';
    for (let i = 0; i < x.length; i++) {
      total1 += x.charCodeAt(i);
    }
    total2 = total1.replace(/7/g, '1');
    return total1.split('').reduce((a, b) => parseInt(a) + parseInt(b)) - total2.split('').reduce((a, b) => parseInt(a) + parseInt(b));
  }

  const calc = x => {
    let total1 = [...x].map(e => e.charCodeAt()).join('')
    let total2 = [...total1].map(e => e == 7 ? 1 : e).join('')
    
    return [...total1].reduce((a,b)=> a + +b, 0) - [...total2].reduce((a,b)=> a + +b, 0)
  }

  function calc(x){
    let a = [...x].map(e => e.charCodeAt()).join('')
    let b = [...a].map(e => e == 7 ? 1 : e).join('')
    return [...a].reduce((a,b) => a + +b, 0) - [...b].reduce((a,b) => a + +b, 0)
}

function calc(x){
  let a = [...x].map(e => e.charCodeAt()).join('')
  let b = [...a].map(e => e == 7 ? 1 : e).join('')
  return [...a].reduce((a,b) => a + +b, 0) - [...b].reduce((a,b) => a + +b, 0)
}