const digitize = n => n.toString().split('').map(e => +e)

function digitize(n) {
    return [...n.toString()].map(e => +e)
  }