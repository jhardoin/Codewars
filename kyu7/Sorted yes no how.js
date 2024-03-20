function isSortedAndHow(array) {
    if (JSON.stringify(array) === JSON.stringify([...array].sort((a, b) => a - b))) {
      return 'yes, ascending';
    } else if (JSON.stringify(array) === JSON.stringify([...array].sort((a, b) => b - a))) {
      return 'yes, descending';
    } else {
      return 'no';
    }
  }

  function isSortedAndHow(array) {
    const ascendingSorted = [...array].sort((a, b) => a - b);
    const descendingSorted = [...array].sort((a, b) => b - a);

  return JSON.stringify(array) == JSON.stringify(ascendingSorted) ? 'yes, ascending' :
         JSON.stringify(array) == JSON.stringify(descendingSorted) ? 'yes, descending' : 'no'
 
}