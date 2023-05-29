function findMultiples(integer, limit) {
    const arry = [];
    let inc = 1;
    while (inc * integer <= limit) {
      arry.push(inc * integer);
      inc++;
    }
    return arry;
  }
  