const findDifference = (a, b) => Math.abs( (a.reduce((a,b) => a * b)) - (b.reduce((a,b) => a * b)) )

function findDifference(a, b) {
    let reduced = [a.reduce((a,b) => a * b), b.reduce((a,b) => a*b)]
    return Math.max(...reduced) - Math.min(...reduced)
  }

  const findDifference = (a, b) => Math.abs((a.reduce((a,b) => a * b)) - (b.reduce((a,b) => a * b)))

  function findDifference(a, b) {
    return Math.abs(a.reduce((a,b)=> a * b) - b.reduce((a,b)=> a * b))
}

function findDifference(a, b) {
  return Math.abs(a.reduce((a,b) => a * b) - b.reduce((a,b) => a * b))
}

function findDifference(a, b) {
  return Math.abs(a.reduce((a,b) => a * b, 1) - b.reduce((a,b) => a * b, 1))
}

function findDifference(a, b) {
  return Math.abs(a.reduce((a,b) => a * b, 1) - b.reduce((a,b) => a * b, 1))
}