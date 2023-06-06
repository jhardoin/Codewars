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