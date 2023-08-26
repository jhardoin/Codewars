function aspectRatio(x,y){
    const x2 = Math.ceil(y * (16 / 9));
    return [x2, y];
  }