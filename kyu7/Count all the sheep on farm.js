function lostSheep(friday,saturday,total){
    let returned = friday.reduce((a,b) => a + b, 0) + saturday.reduce((a,b) => a + b, 0)
    return total - returned
}