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
  

  function countPositivesSumNegatives(input) {
    if(!input || input.length == 0) return []
    let pos = 0
    let neg = 0
    for(let i = 0; i < input.length; i++){
      input[i] > 0 ? pos++ : neg += input[i] 
    }
    return [pos,neg]
  }