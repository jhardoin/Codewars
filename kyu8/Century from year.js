function century(year) {
    return Math.ceil(year/100)
  }

  const century = year => (year <= 100) ? 1 : !(year % 100) ? Math.floor(year/100): Math.floor(year/100 + 1)