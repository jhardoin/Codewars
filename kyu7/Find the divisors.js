function divisors(integer) {
    let arr = Array.from({ length: integer }, (v, i) => i)
    let filtered = arr.filter(e => integer % e == 0 && e !== 1)
    return filtered.length > 1 ? filtered : `${integer} is prime`
  };