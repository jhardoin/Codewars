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