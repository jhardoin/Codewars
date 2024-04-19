function digPow(n, p) {
    let digits = Array.from(String(n), Number)
    let sum = 0
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(digits[i], p + i)
    }
    let k = sum / n
    return Number.isInteger(k) ? k : -1
}