function points(games) {
    return games.reduce((acc,curr)=>{
      let x = parseInt(curr[0]);
      let y = parseInt(curr[2]);
      let value= x>y ? 3 : x===y ? 1 : 0;
      return acc+value;
    }, 0)
  }