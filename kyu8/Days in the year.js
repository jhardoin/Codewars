function yearDays(year){
    let y = Math.abs(year)
    if(year == 0 || (y % 4 == 0 && y % 100 !== 0) || y % 400 == 0 ) return `${year} has 366 days`
    else return `${year} has 365 days`
  }