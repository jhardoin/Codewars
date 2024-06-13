function twoOldestAges(ages){
    let s = (ages.sort((a,b) => b - a))
    return [s[1], s[0]]
  }
  
  function twoOldestAges(ages){
    ages.sort((a,b) => b - a).length = 2
    return ages.reverse()
  }
  

  const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)

  function twoOldestAges(ages){
    let sorted = ages.sort((a,b) => b - a)
    return [sorted[1], sorted[0]]
  }
  

  function twoOldestAges(ages){
    let a = ages.sort((a,b) => b - a)
    return [a[1], a[0]]
  }
  