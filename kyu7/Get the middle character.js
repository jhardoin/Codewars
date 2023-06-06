function getMiddle(s) {
    let middleNum = Math.floor(s.length/2)
    if(s.length % 2 == 1){
      return s[middleNum]
    }
    else{
      return s[middleNum - 1] + s[middleNum]
    }
  }