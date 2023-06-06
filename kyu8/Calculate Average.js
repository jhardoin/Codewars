function findAverage(array) {
    if(array.length === 0) {
      return 0;
    }
    else {
      return (array.reduce((acc, cur) => acc + cur))/array.length;
    }
  }