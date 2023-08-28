function isSortedAndHow(array) {
    if (JSON.stringify(array) === JSON.stringify([...array].sort((a, b) => a - b))) {
      return 'yes, ascending';
    } else if (JSON.stringify(array) === JSON.stringify([...array].sort((a, b) => b - a))) {
      return 'yes, descending';
    } else {
      return 'no';
    }
  }