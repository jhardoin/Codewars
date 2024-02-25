const parseF = (s) => isNaN(parseFloat(s)) ? null : parseFloat(s)

function parseF(s) {
    return parseFloat(s) == +s ? parseFloat(s) : null
 }