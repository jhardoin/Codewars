function encode(str,  n){
    let letters = [...str].map(e => e.charCodeAt(0) - 96)
    let nums = [...n.toString()].map(e => +e)
    let arr = []
    
    for(let i = 0; i < letters.length; i++){
      let index = i % nums.length
      arr.push(letters[i] + nums[index])
    }
    return arr
  }
  