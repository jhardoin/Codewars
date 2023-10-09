const flattenAndSort = array => [].concat(...array).sort((a,b) => a - b)

const flattenAndSort = array => array.flat().sort((a,b) => a - b)