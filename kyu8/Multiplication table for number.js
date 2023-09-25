function multiTable(number) {
    return [...Array(10)].map((element, index) => `${index + 1} * ${number} = ${(index + 1) * (number)}`).join('\n');
  }

  function multiTable(number) {
    let result = []
    for(let i = 1; i <= 10; i++){
    result.push(`${i} * ${number} = ${i * number}`)
    }
    return result.join('\n')
  }