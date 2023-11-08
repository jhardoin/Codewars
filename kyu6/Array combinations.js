const solve = arr => arr.map(e => [...new Set(e)].length).reduce((a,b) => a * b)

const solve = arr => arr.map(e => new Set(e).size).reduce((a,b) => a * b, 1)

const solve = arr => arr.map(e => new Set(e).size).reduce((a,b) => a * b)

const solve = arr => arr.map(e => new Set(e).size).reduce((a,b) => a * b)