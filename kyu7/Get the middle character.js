function getMiddle(s) {
    let middleNum = Math.floor(s.length/2)
    if(s.length % 2 == 1){
      return s[middleNum]
    }
    else{
      return s[middleNum - 1] + s[middleNum]
    }
  }

  const getMiddle = s => s.length % 2 ? (s[Math.floor(s.length/2) ]) : s[s.length/2 - 1] + s[s.length/2]

  function getMiddle(s){
    return s.length % 2 ? s[Math.floor(s.length/2)] : s[s.length/2 - 1] + s[s.length/2]
  }

  function getMiddle(s){
    return s.length % 2 == 0 ? `${s[s.length/2 - 1]}${s[Math.ceil(s.length/2)]}` : `${s[Math.ceil(s.length/2 - 1)]}`
  }

  function getMiddle(s){
    return s.slice((s.length-1)/2, s.length/2+1)
  }

  function getMiddle(s){
    return s.slice((s.length-1)/2, s.length/2+1)
  }

  function getMiddle(s){
    return s.slice((s.length-1)/2, s.length/2+1)
  }

  function getMiddle(s){
    return s.slice((s.length-1)/2, s.length/2+1)
  }

  function getMiddle(s){
    return s.slice((s.length-1)/2, s.length/2+1)
  }