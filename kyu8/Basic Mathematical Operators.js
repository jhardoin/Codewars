function basicOp(operation, value1, value2) {
    return eval(`${value1} ${operation} ${value2}`)
  }

  function basicOp(operation, value1, value2){
    return operation == '+' ? value1 + value2 : operation == '-' ? value1 - value2 : operation == '*' ? value1 * value2 : value1 / value2
  }