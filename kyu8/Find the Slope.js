const slope = p => (p[2] - p[0] == 0) ? 'undefined' : ((p[3] - p[1]) / (p[2] - p[0])).toString()

function slope([ x1, y1, x2, y2 ]) {
    let slope = (y2 - y1) / (x2 - x1);
    return Number.isFinite(slope) ? `${slope}` : 'undefined';
  }