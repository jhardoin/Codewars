const removeSmallest = numbers => numbers.filter((e, i) => i != numbers.indexOf(Math.min(...numbers)))

const removeSmallest = numbers => numbers.filter( (e,i) => i != numbers.indexOf(Math.min(...numbers)) )