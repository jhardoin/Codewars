function nameShuffler(str){
    let [first, last] = str.split(' ')
    return last + ' ' + first
  }

  const nameShuffler = str => str.split(' ').reverse().join(' ')