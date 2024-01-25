function solution(a, b){
    if (a. length < b.length) return a + b + a;
    else return b + a + b;
  }

  const solution = (a, b) => a.length > b.length ? b + a + b : a + b + a

  function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
  }

  function solution(a, b){
    return a.length > b.length ? b + a + b : a + b + a
  }