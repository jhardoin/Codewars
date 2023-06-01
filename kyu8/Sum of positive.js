function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((total, currentValue) => {
      return total + currentValue;
    }, 0)
  }