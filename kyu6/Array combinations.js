const solve = arr => arr.map(e => [...new Set(e)].length).reduce((a,b) => a * b)

const solve = arr => arr.map(e => new Set(e).size).reduce((a,b) => a * b, 1)

const solve = arr => arr.map(e => new Set(e).size).reduce((a,b) => a * b)

const solve = arr => arr.map(e => new Set(e).size).reduce((a,b) => a * b)

const solve = arr => arr.reduce((a,b) => a * new Set(b).size, 1)

function solve(arr) {
    let a = arr.map(e => [...new Set(e)])
    return a.reduce((a,b) => a * (b.length), 1)
};

