function warnTheSheep(queue) {
    let n = queue.reverse().indexOf('wolf')
    return (n < 1) ?"Pls go away and stop eating my sheep" : `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`;
  }

  function warnTheSheep(queue) {
    let num = queue.reverse().indexOf('wolf')
      return num > 0 ? `Oi! Sheep number ${num}! You are about to be eaten by a wolf!`:
      "Pls go away and stop eating my sheep"
  }