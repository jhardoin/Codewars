function reverseNumber(n) {
    let strArr = (n.toString().split(''))
    if(strArr[0] == '-') return +(-strArr.slice(1).reverse().join(''))
    else return +(strArr.reverse().join(''))
  }

  function reverseNumber(n) {
    return n > 0 ? +[...n.toString()].reverse().join(''):
    +[...Math.abs(n).toString()].reverse().join('') * -1
  }

  function reverseNumber(n) {
    return n > 0 ? +[...n.toString()].reverse().join('') : +[...Math.abs(n).toString()].reverse().join('') * -1
  }

  function reverseNumber(n) {
    return n >= 0 ? +n.toString().split('').reverse().join('') :
      +('-' + n.toString().slice(1).split('').reverse().join(''))
  }

  function reverseNumber(n) {
    return n >= 0 ? +n.toString().split('').reverse().join('') :
      +('-' + n.toString().slice(1).split('').reverse().join(''))
  }