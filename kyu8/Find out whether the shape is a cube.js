const cubeChecker = (volume, side) => (volume === 0) ? false : (side ** 3) === Math.abs(volume)

var cubeChecker = function(volume, side){
    return volume > 0 && side > 0 ? Math.cbrt(volume) == side : false
  }