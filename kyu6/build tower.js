function towerBuilder(nFloors) {
    let tower = []
    for (let i = 1; i <= nFloors; i++) {
        let spaces = ' '.repeat(nFloors - i)
        let blocks = '*'.repeat(2 * i - 1)
        tower.push(spaces + blocks + spaces)
    }
    return tower
}

