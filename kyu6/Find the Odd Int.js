const findOdd = (A) => A.reduce((a, b) => a ^ b)

function findOdd(A) {
    let reduced = A.reduce((a, b) => {
      a[b] = (a[b] || 0) + 1
      return a;
    }, {})
    return +Object.entries(reduced).filter(e => e[1] % 2)[0][0]
  }

  function findOdd(A) {
    return A.find((e) => A.filter((n) => e === n).length % 2 !== 0)
  }

  function findOdd(A) {
    return A.find(e => A.filter(el => e == el).length % 2)
  }

  function findOdd(A) {
    return A.find(e => A.filter(el => e == el).length % 2 !== 0)
  }

  function findOdd(A) {
    return A.find((e,i,a) => a.filter(el => e == el).length % 2 !== 0)
  }

  function findOdd(A) {
    return A.find((e,i,a) => a.filter(el => e == el).length % 2 !== 0)
}

function findOdd(A) {
  return A.find((e,i,a) => a.filter(el => e == el).length % 2 !== 0)
}

function findOdd(A) {
  return A.find((e,i,a) => a.filter(el => e == el).length % 2 !== 0)
}

function findOdd(A) {
  return A.find(e => A.filter(el => e == el).length % 2 !== 0)
}

function findOdd(A) {
  return A.find((e,i,a) => a.filter(el => e == el).length % 2 !== 0)
}

function findOdd(A) {
  return A.find((e,i,a) => a.filter(el => e == el).length % 2 !== 0)
}

function findOdd(A) {
  return A.find((e,i,a) => a.filter(el => e === el).length % 2 !== 0)
}

function findOdd(A) {
  return A.find((e,i,a) => a.filter(el => el === e).length % 2 !== 0)
}