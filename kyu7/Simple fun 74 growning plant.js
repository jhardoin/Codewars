function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let daysOfGrowth = 1
    let currentHeight = upSpeed
    while (currentHeight < desiredHeight) {
      currentHeight += upSpeed - downSpeed
      daysOfGrowth++
    }
    return daysOfGrowth
  }