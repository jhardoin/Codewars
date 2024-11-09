const maxSum = (arr,range) => Math.max(...range.map(e => arr.slice(e[0], e[1] + 1).reduce((a, c) => a + c)))

const maxSum = (arr,range) => Math.max(...range.map(e => arr.slice(e[0], e[1] + 1).reduce((a, c) => a + c)))