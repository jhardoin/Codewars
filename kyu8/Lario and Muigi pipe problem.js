function pipeFix(numbers){
    let newNumbers = [];
    for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++)
      newNumbers.push(i);
    return newNumbers;
  }

  function pipeFix(numbers){
    let result = []
    for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++){
      result.push(i)
    }
    return result
  }

  function pipeFix(numbers){
    return Array.from({length:numbers[numbers.length - 1] - numbers[0] + 1}, (e,i) => i + numbers[0])
  }

  function pipeFix(numbers){
    return Array.from({length:numbers[numbers.length - 1] - numbers[0] + 1}, (e,i) => i + numbers[0])
  }

  function pipeFix(numbers){
    return Array.from({length:Math.max(...numbers) - Math.min(...numbers) + 1}, (_,i) => i + Math.min(...numbers))
  }