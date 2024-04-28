function splitTheBill(x) {
    let avg = Object.values(x).reduce((a, b) => a + b, 0) / Object.values(x).length
    let result = {}
    for (let name in x) {
        let diff = Math.round((x[name] - avg) * 100) / 100
        result[name] = diff
    }
    return result
}