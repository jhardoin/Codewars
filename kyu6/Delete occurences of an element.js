function deleteNth(arr, n) {
    const counts = {};
    return arr.filter(e => (counts[e] = (counts[e] || 0) + 1) <= n);
}

const deleteNth = (a, x) => {
    let m = {}
    return a.filter(e => (m[e] = m[e] + 1 || 1) <= x )
  }