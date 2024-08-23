function gimme (triplet) {
    let arr = triplet.map((e, i) => [e, i]).sort((a,b) => a[0] - b[0])
    return arr[1][1]
}

const gimme = triplet => triplet.map((e,i) => [e,i]).sort((a,b) => a[0] - b[0])[1][1]

function gimme(a) {
    return a.indexOf(a.concat().sort((a, b) => a - b)[1])
  }

  function gimme (triplet) {
    return triplet.indexOf([...triplet].sort((a, b) => a - b)[1])
  }

  function gimme (triplet) {
    return triplet.indexOf([...triplet].sort((a,b) => a - b)[1])
  }
  
  function gimme (triplet) {
    return triplet.indexOf([...triplet].sort((a,b) => a - b)[1])
  }
  