function startingMark(bodyHeight){
    let xyz = (10.67 - 9.45) / (1.83 - 1.52);
    return Math.round((10.67 + xyz * bodyHeight - xyz * 1.83) * 100) / 100;
  }