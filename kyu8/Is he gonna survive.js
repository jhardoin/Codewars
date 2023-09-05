function hero(bullets, dragons){
    if(bullets/dragons >= 2) {
      return true
    }
    else {
      return false
    }
  }
  
  const hero = (bullets, dragons) => dragons == 0 ? true : bullets/dragons >= 2