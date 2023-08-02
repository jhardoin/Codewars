function reverseNumber(n) {
    let strArr = (n.toString().split(''))
    if(strArr[0] == '-') return +(-strArr.slice(1).reverse().join(''))
    else return +(strArr.reverse().join(''))
  }