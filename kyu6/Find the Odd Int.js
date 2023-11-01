const findOdd = (A) => A.reduce((a, b) => a ^ b)

function findOdd(A) {
    let reduced = A.reduce((a, b) => {
      a[b] = (a[b] || 0) + 1
      return a;
    }, {})
    return +Object.entries(reduced).filter(e => e[1] % 2)[0][0]
  }