function points(games) {
    return games.reduce((acc,curr)=>{
      let x = parseInt(curr[0]);
      let y = parseInt(curr[2]);
      let value= x>y ? 3 : x===y ? 1 : 0;
      return acc+value;
    }, 0)
  }

  const points = (games, count = 0) => {
    games.forEach(e => +e[0] > +e[2] ? count += 3 : +e[0] == +e[2] ? count++ : 0)
    return count
  }

  function points(games, count = 0) { games.forEach(e => e[0] > e[2] ? count += 3 : e[0] == e[2] ? count++ : '')
  return count
}

const points = games => games.map(e => e[0] > e[2] ? 3 : e[0] == e[2] ? 1 : 0).reduce((a,b) => a + b, 0)