function multiTable(number) {
    return [...Array(10)].map((element, index) => `${index + 1} * ${number} = ${(index + 1) * (number)}`).join('\n');
  }