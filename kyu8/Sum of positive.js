function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((total, currentValue) => {
      return total + currentValue;
    }, 0)
  }

  const positiveSum = arr => arr.filter(e => e > 0).reduce((a,b) => a + b, 0)