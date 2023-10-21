function findAverage(array) {
    if(array.length === 0) {
      return 0;
    }
    else {
      return (array.reduce((acc, cur) => acc + cur))/array.length;
    }
  }

  const findAverage = array => array.length == 0 ? 0 : array.reduce((a,b) => a + b, 0)/array.length

  const findAverage = array => array.length > 0 ? array.reduce((a,b) => a + b, 0)/array.length : 0