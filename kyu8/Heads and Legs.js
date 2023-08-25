function animals(heads, legs) {
    let cows = (legs - 2 * heads) / 2;
    let chickens = heads - cows;
  
    if (chickens >= 0 && cows >= 0 && Number.isInteger(chickens) && Number.isInteger(cows)) {
      return [chickens, cows];
    } else {
      return "No solutions";
    }
  }
  