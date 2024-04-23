function goodVsEvil(good, evil) {
    const goodWorth = [1, 2, 3, 3, 4, 10]
    const evilWorth = [1, 2, 2, 2, 3, 5, 10]
    
    const goodTotalWorth = good.split(' ').reduce((a, b, i) => a + (b * goodWorth[i]), 0)
    const evilTotalWorth = evil.split(' ').reduce((a, b, i) => a + (b * evilWorth[i]), 0)
    
    if (goodTotalWorth > evilTotalWorth) {
        return 'Battle Result: Good triumphs over Evil'
    } else if (evilTotalWorth > goodTotalWorth) {
        return 'Battle Result: Evil eradicates all trace of Good'
    } else {
        return 'Battle Result: No victor on this battle field'
    }
}