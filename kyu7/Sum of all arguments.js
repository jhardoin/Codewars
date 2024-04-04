const sum = () => [...arguments].filter(e => e !== undefined).reduce((a,b) => a + b)

function sum(...a) {
    return a.reduce((a,b) => a + b, 0)
  }