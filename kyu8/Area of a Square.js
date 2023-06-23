function squareArea(A){
    let radius = (2 * A )/ Math.PI;
    let sqr = radius ** 2;
    return Number(sqr.toFixed(2));
  }