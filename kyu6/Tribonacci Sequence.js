function tribonacci(signature, n) {
    if (n === 0) return []
    if (n <= signature.length) return signature.slice(0, n)
  
    let result = [...signature]
    for (let i = 3; i < n; i++) {
        result.push(result[i - 1] + result[i - 2] + result[i - 3])
    }
    return result
}

function tribonacci(signature,n){
    for(let i = 3; i < n; i++){
      signature.push(signature[i - 3] + signature[i - 2] + signature[i - 1])
    }
    return signature.slice(0,n)
}