const arrayMadness = (a, b) => a.map(e => e ** 2).reduce((x, y) => x + y) > b.map(e => e ** 3).reduce((x, y) => x + y)

function arrayMadness(a, b) {
    return a.reduce((a,b) => a + (b ** 2), 0) > b.reduce((a,b) => a + (b ** 3), 0)
  }

  function arrayMadness(a, b) {
    return a.reduce((a,b) => a + (b ** 2), 0) > b.reduce((a,b) => a + (b ** 3), 0)
  }