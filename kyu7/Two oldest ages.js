function twoOldestAges(ages){
    let s = (ages.sort((a,b) => b - a))
    return [s[1], s[0]]
  }
  