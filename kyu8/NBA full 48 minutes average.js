const pointsPer48 = (ppg, mpg) => (ppg === 0 || mpg === 0) ? 0 : Number((ppg * 48/mpg).toFixed(1))

function pointsPer48(ppg, mpg) {
    return ppg && mpg ? +(ppg * 48/mpg).toFixed(1) : 0
  }

  function pointsPer48(ppg, mpg) {
    return ppg && mpg ? +(ppg * 48/mpg).toFixed(1) : 0
  }