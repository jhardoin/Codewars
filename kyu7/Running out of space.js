function spacey(array) {
    let result = [];
    let concatenated = '';
    for (let i = 0; i < array.length; i++) {
      concatenated += array[i];
      result.push(concatenated);
    }
    return result;
  }