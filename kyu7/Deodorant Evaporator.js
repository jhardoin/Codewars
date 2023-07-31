function evaporator(content, evap_per_day, threshold){ 
    let result = 100;
    let days = 0;
    let epd = evap_per_day / 100;
    for(let i = 0; result > threshold; i++){
      result -= result * epd
      days++
  }
    return days
  }