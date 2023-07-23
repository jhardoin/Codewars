function nbDig(n, d) {
    let result = [];
    for (let i = 0; i <= n; i++) {
      result.push(i * i);
    }
    let filteredArray = result.filter((num) => String(num).includes(d.toString()));
  
    let digitCount = filteredArray.reduce((count, num) => {
      return count + String(num).split(d.toString()).length - 1;
    }, 0);
  
    return digitCount;
  }
  