function twoOldestAges(ages){
    let s = (ages.sort((a,b) => b - a))
    return [s[1], s[0]]
  }
  
  function twoOldestAges(ages){
    ages.sort((a,b) => b - a).length = 2
    return ages.reverse()
  }
  

  const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)