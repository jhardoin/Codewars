function mxdiflg(a1, a2) {
    let l1 = a1.map(e => e.length)
    let l2 = a2.map(e => e.length)
    if(a1.length === 0 || a2.length === 0) return -1
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1;

    const a1Max = Math.max(...a1.map(str => str.length));
    const a1Min = Math.min(...a1.map(str => str.length));
    const a2Max = Math.max(...a2.map(str => str.length));
    const a2Min = Math.min(...a2.map(str => str.length));

  
    return Math.max(Math.abs(a1Max - a2Min), Math.abs(a2Max - a1Min));
}

function mxdiflg(a1, a2) {
    let l1 = a1.map(e => e.length)
    let l2 = a2.map(e => e.length)
    if(a1.length === 0 || a2.length === 0) return -1
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}