const sumOfIntegersInString = s => s.match(/\d+/g) == null ? 0 : s.match(/\d+/g).reduce((a,b) => +a + +b, 0)

function sumOfIntegersInString(s) {
    const matches = s.match(/\d+/g)
    if (!matches) return 0

    return matches.reduce((sum, numStr) => sum + parseInt(numStr), 0)
}