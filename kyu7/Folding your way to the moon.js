function foldTo(distance) {
    if(distance < 0) return null
    let count = 0
    let thickness = .0001
    while(thickness<distance){
      thickness *= 2
      count++
    }
    return count
  }