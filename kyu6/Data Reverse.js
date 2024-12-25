function dataReverse(data) {
    let result = []
    for (let i = 0; i < data.length; i += 8) {
      result.push(data.slice(i, i + 8));
    }
    return result.reverse().flat()
  }

  function dataReverse(data) {
    let arr = []
    
    for(let i = 0; i < data.length; i += 8){
      arr.push(data.slice(i, i + 8))
    }
    return arr.reverse().flat()
  }

  function dataReverse(data) {
    let arr = []
    
    for(let i = 0; i < data.length; i += 8){
      arr.push(data.slice(i, i + 8))
    }
    return arr.reverse().flat()
  }