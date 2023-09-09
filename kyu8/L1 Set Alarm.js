function setAlarm(employed, vacation){
    if(employed && !vacation) return true
    else return false
  }

  const setAlarm = (employed, vacation) => employed && !vacation