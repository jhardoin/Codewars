function diamond(n) {
    if (n % 2 === 0 || n < 0) return null
    
    let diamondStr = ''
    for (let i = 0; i < n; i++) {
        const spaces = Math.abs(Math.floor(n / 2) - i)
        const diamonds = n - 2 * spaces
        diamondStr += " ".repeat(spaces) + "*".repeat(diamonds) + "\n"
    }
    
    return diamondStr
}