function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1 || input == []){
    return [];
    }
    else {
    let sorted = input.sort((a, b) => a - b);
    let positive = sorted.filter((e) => e > 0).length;
    let negative = sorted.filter((e) => e < 0).reduce((a, c) => a + c);
  
    return new Array(positive, negative)
      }
    }

    function countPositivesSumNegatives(input) {
      return input && input.length ? [input.filter(e => e > 0).length, input.filter(e => e < 0).reduce((a, b) => a + b, 0)] : []
  }
  