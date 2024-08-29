function order(words) {
    return words.split(' ')
                .sort((a, b) => /\d/.exec(a) - /\d/.exec(b))
                .join(' ');
  }

  function order(words){
    let nums = '1234567890'
    let order = words.split(' ').map(e => [...e].filter(e => nums.includes(...e))).flat()
    return order.map((e,i) => [e, words.split(' ')[i]]).sort().map(e => e[1]).join(' ')
  }

  function order(words) {
    let result = []
    let items = words.split(' ')
    
    for (let i = 1; i < items.length + 1; i++) {
      result.push(items.find(e => e.includes(i)));
    }
    
    return result.join(' ');
  }

  function order(words){
    let result = []
    let arr = words.split(' ')
    
    for(let i = 1; i <= arr.length; i++){
      result.push(arr.find(e => e.includes(i)))
    }
    return result.join(' ')
  } 

  function order(words) {
    const arr = [];
    const s = words.split(' ');
    
    for (let i = 1; i <= s.length; i++) {
      arr.push(s.find((e) => e.includes(i)));
    }
    
    return arr.join(' ')
  }

  function order(words) {
    const arr = [];
    const s = words.split(' ');
    
    for (let i = 1; i <= s.length; i++) {
      arr.push(s.find((e) => e.includes(i)));
    }
    
    return arr.join(' ')
  }

  function order(words){
    let s = words.split(' ')
    let arr = []
    for(let i = 1; i <= s.length; i++){
      arr.push(s.find(e => e.includes(i)))
    }
    return arr.join(' ')
}

function order(words){
  let s = words.split(' ')
  let arr = []
  for(let i = 1; i <= s.length; i++){
    arr.push(s.find(e => e.includes(i)))
  }
  return arr.join(' ')

}

function order(words){
  let arr = []
  let split = words.split(' ')
  for(let i = 1; i <= split.length; i++){
    arr.push(split.find(e => e.includes(i)))
  }
  return arr.join(' ')
}

function order(words){
  let arr = []
  let s = words.split(' ')
  for(let i = 1; i <= s.length ; i++){
    arr.push(s.find(e => e.includes(i)))
  }
  return arr.join(' ')
}

function order(words){
  let arr = []
  let w = words.split(' ')
  for(let i = 1; i <= w.length; i++){
    arr.push(w.find(e => e.includes(i)))
  }
  return arr.join(' ')
}