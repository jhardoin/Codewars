function mxdiflg(a1, a2) {
    let l1 = a1.map(e => e.length)
    let l2 = a2.map(e => e.length)
    if(a1.length === 0 || a2.length === 0) return -1
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}