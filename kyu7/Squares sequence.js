function squares(x, n) {
    if(n <= 0) return []
    return Array.from({length:n}, (_, i) => i === 0 ? x : x *= x)
  }