function arrayLeaders(numbers) {
    let leaders = []
  
    for (let i = 0; i < numbers.length; i++) {
      let sumRight = numbers.slice(i + 1).reduce((acc, curr) => acc + curr, 0)
      if (numbers[i] > sumRight) {
        leaders.push(numbers[i])
      }
    }
  
    return leaders
  }