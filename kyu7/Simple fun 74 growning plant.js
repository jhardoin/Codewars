function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let daysOfGrowth = 1
    let currentHeight = upSpeed
    while (currentHeight < desiredHeight) {
      currentHeight += upSpeed - downSpeed
      daysOfGrowth++
    }
    return daysOfGrowth
  }

  function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let count = 1
    let current = upSpeed
    while(current < desiredHeight){
      current += upSpeed - downSpeed
      count++
    }
    return count
  
}