function divisors(integer) {
    let arr = Array.from({ length: integer }, (v, i) => i)
    let filtered = arr.filter(e => integer % e == 0 && e !== 1)
    return filtered.length > 1 ? filtered : `${integer} is prime`
  };

  function divisors(integer) {
    let arr = Array.from({length:integer - 2}, (v,i) => i + 2).filter(e => !(integer % e))
    return arr.length > 0 ? arr : `${integer} is prime`
  }

  function divisors(integer) {
    let arr = Array.from({length:integer - 2}, (v,i) => i + 2).filter(e => !(integer % e))
    return arr.length > 0 ? arr : `${integer} is prime`
  }

  function divisors( int ) {
    let arr = Array.from({length: int-1}, (e, i)=> i+1).slice(1).filter(e => int % e === 0)
    return arr.length ? arr : `${int} is prime`;
  }