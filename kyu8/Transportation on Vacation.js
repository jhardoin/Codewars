function rentalCarCost(d) {
    if(d < 3) {
      return d * 40;
    }
    else if (d < 7) {
      return (d * 40) - 20;
    }
    else {
      return (d * 40) - 50;
    }
  }

  const rentalCarCost = d => d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40

  const rentalCarCost = d => d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40

  const rentalCarCost = d => d >= 7 ? 40 * d - 50 : d >= 3 ? 40 * d - 20 : 40 * d

  function rentalCarCost(d) {
    return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40
  }