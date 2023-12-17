const pillars = (numPill, dist, width) => (numPill <= 1) ? 0 : (dist * 100) * (numPill - 1) + (width) * (numPill - 2)

function pillars(numPill, dist, width) {
    return numPill > 1 ? ((numPill - 2) * width) + ((numPill - 1) * dist * 100) : 0
  }