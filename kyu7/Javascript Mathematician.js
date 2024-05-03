function calculate(...a) {
    return function(...b) {
        return a.concat(b).reduce((acc, curr) => acc + curr, 0)
    }
}