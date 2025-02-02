function menFromBoys(arr){
    let odd = [...new Set(arr.filter(e => e % 2))].sort((a,b) => b - a)
    let even = [...new Set(arr.filter(e => e % 2 == 0))].sort((a,b) => a - b)
    return even.concat(odd)
  }

  function menFromBoys(arr){
    let arr2 = [...new Set([...arr])]
    let men = arr2.filter(e => e % 2 == 0).sort((a,b) => a - b)
    let boys = arr2.filter(e => e % 2 !== 0).sort((a,b) => b - a)
    return men.concat(boys)
  }

  function menFromBoys(arr){
    let arr2 = [...new Set([...arr])]
    let men = arr2.filter(e => e % 2 == 0).sort((a,b) => a - b)
    let boys = arr2.filter(e => e % 2 !== 0).sort((a,b) => b - a)
    return men.concat(boys)
  }