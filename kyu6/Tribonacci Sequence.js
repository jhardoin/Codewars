function tribonacci(signature, n) {
    if (n === 0) return []
    if (n <= signature.length) return signature.slice(0, n)
  
    let result = [...signature]
    for (let i = 3; i < n; i++) {
        result.push(result[i - 1] + result[i - 2] + result[i - 3])
    }
    return result
}