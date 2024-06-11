function isLeapYear(year) {
    if(year % 400 == 0) return true
    else if(year % 100 == 0) return false
    else if(year % 4 == 0) return true
    else return false
  }

  function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
  }

  function isLeapYear(year) {
    return year % 4 == 0 && year % 100 !== 0 || year % 400 == 0
  }

  function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
  }