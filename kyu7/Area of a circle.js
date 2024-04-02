const circleArea = radius => radius <= 0 ? error : Math.PI * radius ** 2

function circleArea(radius) {
    if (radius <=0) {
      throw new Error("Error")
    }
    return Math.PI*(radius * radius);
  }