function isValidWalk(walk) {
    if(walk.length !== 10) return false;
    let nums = walk.map(item => {
      if(item === 'n' || item === 'N') {
        return 1;
        }
      if(item === 's' || item === 'S') {
        return -1;
        }
      if(item === 'e' || item === 'E') {
        return 2;
      }
      if(item === 'w' || item === 'W') {
        return -2;
        }
    })
    
    let solution = nums.reduce((acc, cur) => acc + cur, 0)
    
    if(solution === 0){
      return true
    }
    else {
      return false
    }
    }

    function isValidWalk(walk) {
      const north = walk.filter(e => e === "n" ).length;
      const south = walk.filter(e => e === "s" ).length;
      const east = walk.filter(e =>  e === "e" ).length;
      const west = walk.filter(e => e === "w" ).length;
      
      return walk.length === 10 && north === south && east === west;
    }

    function isValidWalk(walk) {
      return walk.length == 10 && walk.map(e => e == 'n' ? 1 : e == 's' ? -1 : e == 'w' ? 2 : -2).reduce((a,b) => a + b, 0) == 0
  }

  function isValidWalk(walk) {
    let a = walk.map(e => e == 'n' ? 1 : e == 's' ? -1 : e == 'w' ? 2 : -2)
    let b = a.reduce((a,b) => a + b , 0)
    return walk.length == 10 && b == 0
  }