function gimme (triplet) {
    let arr = triplet.map((e, i) => [e, i]).sort((a,b) => a[0] - b[0])
    return arr[1][1]
}