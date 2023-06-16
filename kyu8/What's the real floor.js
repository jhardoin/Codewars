function getRealFloor(n) {
    if(n > 0 && n > 13) return n - 2;
    if(n > 0) return n - 1;
    else return n;
  }