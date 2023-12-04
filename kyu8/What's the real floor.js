function getRealFloor(n) {
    if(n > 0 && n > 13) return n - 2;
    if(n > 0) return n - 1;
    else return n;
  }

  const getRealFloor = n => n > 13 ? n - 2 : n > 0 ? n - 1 : n

  function getRealFloor(n) {
    return n >= 13 ? n - 2 : n >= 1 ? n - 1 : n
  }