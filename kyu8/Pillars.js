const pillars = (numPill, dist, width) => (numPill <= 1) ? 0 : (dist * 100) * (numPill - 1) + (width) * (numPill - 2)

function pillars(numPill, dist, width) {
    return numPill > 1 ? ((numPill - 2) * width) + ((numPill - 1) * dist * 100) : 0
  }

  function pillars(num_pill, dist, width) {
    return num_pill <= 1 ? 0 : (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
  }

  function pillars(num_pill, dist, width) {
    return num_pill <= 1 ? 0 : (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
  }

  function pillars(num_pill, dist, width) {
    return num_pill <= 1 ? 0 : (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
  }