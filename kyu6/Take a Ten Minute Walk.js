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