function capitalize(s){
    let sWithI = s.split('').map((e,i) => [e, i])
    let even = sWithI.map(e => e[1] % 2 == 0 ? e[0].toUpperCase() : e[0]).join('')
    let odd = sWithI.map(e => e[1] % 2 == 0 ? e[0] : e[0].toUpperCase()).join('')
    return [even, odd]
  };

  function capitalize(s){
    let a = [...s].map((e,i) => i % 2 == 0 ? e.toUpperCase() : e.toLowerCase()).join('')
    let b = [...s].map((e,i) => !(i% 2) ? e.toLowerCase() : e.toUpperCase()).join('')
    return [a,b]
  };

  function capitalize(s){
    return [[...s].map((e,i) => i % 2 == 0? e.toUpperCase() : e).join(''), [...s].map((e,i) => i % 2 ? e.toUpperCase() : e).join('')]
  };

  function capitalize(s){
    let t = [...s]
    return [t.map((e,i) => i % 2 == 0 ? e.toUpperCase() : e.toLowerCase()).join(''), t.map((e,i) => i % 2 !== 0 ? e.toUpperCase() : e.toLowerCase()).join('')]
  }