function deleteNth(arr, n) {
    const counts = {};
    return arr.filter(e => (counts[e] = (counts[e] || 0) + 1) <= n);
}
