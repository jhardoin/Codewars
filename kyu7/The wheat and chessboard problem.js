function squaresNeeded(grains) {
    if (grains === 0) return 0
    let count = 0
    let totalGrains = 0
    
    while (totalGrains < grains) {
        totalGrains += 2 ** count
        count++
    }
    return count
}